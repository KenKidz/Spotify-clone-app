<script lang="ts" setup>
interface Emits {
  (e: "onSignupBtnClick"): void;
  (e: "onSignInGoogle"): void;
}

const emit = defineEmits<Emits>()
const loggedIn = ref<boolean>(false)
const user = ref<any>(null)
const onSignUpBtnClick = () => {
  emit('onSignupBtnClick')
}

const handleLoginWithGoogleClick = () => {
  emit('onSignInGoogle')
}

const onLogout = () => {
  loggedIn.value = false
  console.log(123)
}
</script>
<template>
  <VRow>
    <VCol cols="12" sm="6">
      <VCardText class="mt-12">
        <h3 class="text-center mb-1">Login to Your Account</h3>
        <h5 class="text-center text-grey-lighten-1">Log in to your account so you can continue building<br/>and editing your boarding flows
        </h5>
        <VRow align="center" justify="center">
          <VCol cols="12" sm="10" md="9">
            <VTextField label="Email" variant="outlined" density="comfortable" class="mt-16"></VTextField>
            <VTextField label="Password" variant="outlined" density="comfortable" type="password"></VTextField>
            <VRow>
              <VCol sm="7" md="7" class="pb-0">
                <VCheckbox label="Remember me" class="mt-n1"></VCheckbox>
              </VCol>
              <VCol sm="5" md="5" class="pb-0 ma-auto">
                <span class="caption text-green-accent-4">Forget password</span>
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12" class="pt-0">
                <VBtn color="green-accent-4" block>Login in</VBtn>
                <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                <div class="text-center">
                  <VBtn variant="outlined" color="grey" @click="handleLoginWithGoogleClick">
                    <v-icon class="me-1" color="red">mdi-google</v-icon>
                  </VBtn>
                  <v-btn class="mx-8" variant="outlined" color="grey" @click="onLogout">
                    <v-icon color="blue">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn variant="outlined" color="grey">
                    <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                  </v-btn>
                </div>
                <div id="firebaseui-auth-container"></div>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCardText>
    </VCol>
    <VCol cols="12" sm="6" class="bg-green-accent-4 rounded-bl-xl">
      <div class="text-center" style="padding: 180px 0;">
        <VCardText class="text-white">
          <h3 class="text-center mb-1">Don't Have an Account Yet?</h3>
          <h5 class="text-center text-grey-darken-4">
            Let's get you all set up so you can start creating your first<br/>
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

<style lang="scss" scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
