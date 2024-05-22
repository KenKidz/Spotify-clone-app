<template>
  <VContainer v-if="userStore.userInfo">
    <VRow align="center" justify="center">
      <VCol cols="12" sm="8" md="5">
        <VCard class="elevation-6 mt-16" color="black" rounded="xl">
          <VCardTitle>
            <IconBtn class="ms-5" @click="onBackClick">
              <VIcon size="25">tabler-arrow-left</VIcon>
            </IconBtn>
          </VCardTitle>
          <VCardText>
            <div class="px-8">
              <h2>My Profile</h2>
              <div class="text-center my-6">
                <VAvatar
                  class="cursor-pointer mx-auto"
                  color="primary"
                  variant="tonal"
                  size="150"
                  @mouseover="handleHover(true)"
                  @mouseleave="handleHover(false)"
                  @click="onAvatarClick"
                  :style="{ filter: hoverEffect ? 'brightness(50%)' : 'none' }"
                >
                  <VImg :src="userInfo?.photoURL || defaultAvatar" />
                  <div v-if="hoverEffect" class="camera-icon">
                    <VIcon>tabler-camera</VIcon>
                  </div>
                </VAvatar>
                <input ref="inputUpload"
                       type="file"
                       hidden
                       @change="onChangeImage"/>
              </div>
              <v-text-field
                v-model="userInfo.displayName"
                class="mx-auto mb-4"
                width="350"
                rounded="lg"
                variant="outlined"
                label="Username"
                density="comfortable"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.email"
                class="mx-auto mb-4"
                width="350"
                rounded="lg"
                variant="outlined"
                label="Email"
                density="comfortable"
                :rules="[emailValidator]"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.phoneNumber"
                class="mx-auto"
                width="350"
                rounded="lg"
                variant="outlined"
                label="Phone number"
                density="comfortable"
                :rules="[phoneNumberValidator]"
              ></v-text-field>
            </div>
          </VCardText>
          <VCardActions class="pe-11">
            <VSpacer />
            <VBtn variant="elevated">Cancel</VBtn>
            <VBtn variant="elevated" color="green-accent-4" @click="onSaveClick">Save</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { emailValidator, phoneNumberValidator } from '@/utils/validators'
import { updateEmail, updateProfile } from 'firebase/auth'
import { app, auth } from '@/plugins/firebaseConfig'
import { getDownloadURL, getStorage, ref as firebaseRef, uploadBytes } from 'firebase/storage'
import { useUserStore } from '@/stores/userStore'
import defaultAvatar from '@images/avatars/default-avatar.png'
import { useToast } from 'vue-toastification'
import router from '@/router'

definePage({
  meta: {
    layout: 'blank'
  }
})

let userStore = useUserStore()
let { userInfo }= storeToRefs(userStore)
const hoverEffect = ref<boolean>(false);
const inputUpload = ref<any>()
const fileInput = ref<any>()
const toast = useToast()

const handleHover = (isHovering: boolean) => {
  hoverEffect.value = isHovering;
};

const onAvatarClick = () => {
  inputUpload.value.click()
}

async function uploadImage(imageFile: any) {
  if (!imageFile) return; // Handle empty file selection

  const storage = getStorage(app);
  const storageRef = firebaseRef(storage, `images/${imageFile.name}`); // Adjust path as needed

  try {
    const snapshot = await uploadBytes(storageRef, imageFile);
    userInfo.value.photoURL = await getDownloadURL(snapshot.ref)
    console.log(userInfo.value?.photoURL)
  } catch (error) {
    console.error('Error uploading image:', error);
    // Handle upload errors
  }
}

const onChangeImage = async (e: any) => {
  const file = e.target.files[0];
  fileInput.value = file
  const reader = new FileReader();

  reader.onload = (e) => {
    userInfo.value.photoURL = e.target.result;
  };

  reader.readAsDataURL(file);
}

const onSaveClick = async () => {
  await Promise.all([
    uploadImage(fileInput.value),
    updateProfile(auth.currentUser, {
      displayName: userInfo.value?.displayName,
      photoURL: userInfo.value?.photoURL,
      phoneNumber: userInfo.value?.phoneNumber,
    }),
    updateEmail(auth.currentUser, userInfo.value?.email),
  ])
  toast.success("Save successful")
}

const onBackClick = () => {
  router.go(-1)
}

</script>

<style scoped>
.camera-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  opacity: 0.7;
}
</style>
