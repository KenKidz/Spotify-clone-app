<template>
  <VContainer>
    <VRow align="center" justify="center">
      <VCol cols="12" sm="11">
        <VCard class="elevation-6 mt-16 pa-0" color="black">
          <VWindow v-model="step">
            <VWindowItem :value="1">
              <Signin @onSignupBtnClick="onSignupBtnClick" @on-sign-in-google="signInGoogle"/>
            </VWindowItem>
            <VWindowItem :value="2">
              <Signup @onLogInBtnClick="onLogInBtnClick"/>
            </VWindowItem>
          </VWindow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
import Signin from '@/pageComponents/login/Signin.vue'
import Signup from '@/pageComponents/login/Signup.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const step = ref<number>(1)
const isSignedIn = ref<boolean>(false)

const signInGoogle = async () => {
  await userStore.loginInWithGoogle()
}

const onSignupBtnClick = () => {
  step.value++
}

const onLogInBtnClick = () => {
  step.value--
}
</script>

<route lang="yaml">
meta:
  layout: blank
</route>
