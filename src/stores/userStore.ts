import { defineStore } from 'pinia'
import type { IUserInfo } from '@/interfaces/userInterface'
import router from '@/router'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth } from '@/plugins/firebaseConfig'

interface StoreInterface {
  userInfo: IUserInfo | null
  isLoading: boolean
  hasFailed: boolean
  isAuth: boolean
  localError: any
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {},
    isLoading: false,
    hasFailed: false,
    localError: null
  } as StoreInterface),
  actions: {
    async loginInWithGoogle() {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({
        prompt: 'select_account'
      })
      this.isLoading = true
      this.hasFailed = false
      this.localError = null

      try {
        const result = await signInWithPopup(auth, provider)
        this.userInfo = result.user
        this.isAuth = true
        router.replace('/')
      } catch (error) {
        this.hasFailed = true
        this.localError = error
      } finally {
        this.isLoading = false
      }
    },
    async logOut() {
      await signOut(auth)
      this.userInfo = null
      this.isLoading = false
      router.replace('/login')
    },

    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userInfo = user
          this.isLoading = true
        } else {
          this.userInfo = null
          this.isLoading = false
          router.replace('/login')
        }
      })
    }
  }
})