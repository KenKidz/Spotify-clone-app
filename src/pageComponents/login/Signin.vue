
<template>
  <VRow>
    <VCol cols="12" sm="6">
      <VCardText class="mt-12">
        <h3 class="text-center mb-1">Login to Your Account</h3>
        <h5 class="text-center text-grey-lighten-1">Log in to your account so you can continue building<br />and editing
          your boarding flows
        </h5>
        <VRow align="center" justify="center">
          <VCol cols="12" sm="10" md="9">
            <VForm ref="refVForm">
              <VTextField
                v-model="workingItem.email"
                label="Email"
                variant="outlined"
                density="comfortable"
                class="mt-16 mb-4"
                autofocus
                :rules="[requiredValidator, lengthValidator(workingItem.email, 25)]"
                @keyup.enter="onLogIn"
              ></VTextField>
              <VTextField
                v-model="workingItem.password"
                class="mb-4"
                label="Password"
                variant="outlined"
                density="comfortable"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                :rules="[requiredValidator, passwordValidator]"
                @keyup.enter="onLogIn"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              ></VTextField>
              <VRow>
                <VCol sm="7" md="7" class="pb-0 ma-auto">
                  <VCheckbox v-model="rememberMe" label="Remember me" class="mt-n1"></VCheckbox>
                </VCol>
                <VCol sm="5" md="5" class="pb-0 ma-auto">
                  <span class="caption text-green-accent-4">Forget password</span>
                </VCol>
              </VRow>
              <VRow>
                <VCol cols="12" class="pt-0">
                  <VBtn
                    color="green-accent-4"
                    block
                    @click="onLogIn"
                    :loading="isPending"
                  >
                    Login in
                  </VBtn>
                  <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                  <div class="text-center">
                    <VBtn variant="outlined" color="grey" @click="handleLoginWithGoogleClick">
                      <v-icon class="me-1" color="red">mdi-google</v-icon>
                    </VBtn>
                    <v-btn class="mx-8" variant="outlined" color="grey">
                      <v-icon color="blue">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn variant="outlined" color="grey">
                      <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                  <div id="firebaseui-auth-container"></div>
                </VCol>
              </VRow>
            </VForm>
          </VCol>
        </VRow>
      </VCardText>
    </VCol>
    <VCol cols="12" sm="6" class="bg-green-accent-4 rounded-bl-xl">
      <div class="text-center" style="padding: 180px 0;">
        <VCardText class="text-white">
          <h3 class="text-center mb-1">Don't Have an Account Yet?</h3>
          <h5 class="text-center text-grey-darken-4">
            Let's get you all set up so you can start creating your first<br />
            onboarding experience
          </h5>
        </VCardText>
        <div class="text-center text-white">
          <VBtn color="grey-darken-4" variant="elevated" @click="onSignUpBtnClick">Sign up</VBtn>
        </div>
      </div>
    </VCol>
  </VRow>
</template>
<script lang="ts" setup>
import router from '@/router'
import type { VForm } from 'vuetify/components'
import { useToast } from 'vue-toastification'
import { lengthValidator, passwordValidator, requiredValidator } from '@/utils/validators'
import { AES, enc } from 'crypto-js'
import { useSignIn } from '@/composables/useSignin'

interface Emits {
  (e: 'onSignupBtnClick'): void;

  (e: 'onSignInGoogle'): void;
}

const { error, isPending ,signIn } = useSignIn()
const emit = defineEmits<Emits>()
const workingItem = ref<any>({})
const refVForm = ref<VForm>()
const toast = useToast()
const isPasswordVisible = ref<boolean>(false)
const rememberMe = ref<boolean>(false)
const cvsecretKey = ref<any>('secretKey_cv')

onMounted(() => {
  const dataRememberMe = JSON.parse(localStorage.getItem('cvrememberme'));
  if(dataRememberMe && dataRememberMe?.email){
    workingItem.value.email = dataRememberMe?.email;
  }
  if(dataRememberMe && dataRememberMe.password){
    workingItem.value.password = AES.decrypt(dataRememberMe?.password, cvsecretKey.value).toString(enc.Utf8);
  }
  if(dataRememberMe && dataRememberMe.rememberme){
    rememberMe.value = dataRememberMe?.rememberme;
  }
})

const onSignUpBtnClick = () => {
  emit('onSignupBtnClick')
}

const onLogIn = async () => {
  refVForm.value?.validate()
    .then(async ({ valid: isValid }) => {
      if (isValid) {
        await signIn(workingItem.value.email, workingItem.value.password)
        if(!error.value) {
          if (rememberMe.value) {
            const dataRememberMe = {
              rememberMe: rememberMe.value,
              password: workingItem.value.password.toLowerCase(),
              email: workingItem.value.email
            }
            dataRememberMe.password = AES.encrypt(dataRememberMe.password, cvsecretKey.value).toString()
            localStorage.setItem('cvrememberme', JSON.stringify(dataRememberMe))
          } else {
            localStorage.removeItem('cvrememberme')
          }
          router.replace('/')
        } else {
          toast.error(error.value)
        }
      }
    })
}

const handleLoginWithGoogleClick = () => {
  emit('onSignInGoogle')
}
</script>

<style lang="scss" scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
