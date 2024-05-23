import { auth } from '@/plugins/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthErrorCodes } from '@/constants/enums'

const error = ref<any>(null)
const isPending = ref<boolean>(false)

async function signIn(email: string, password: string) {
  isPending.value = true
  error.value = null
  try{
    const res = await signInWithEmailAndPassword(auth, email, password)
    return res
  } catch (err: any) {
    console.log(err)
    switch(err.code) {
      case AuthErrorCodes.USER_NOT_FOUND:
        error.value = "User not found"
        break
      case AuthErrorCodes.INVALID_EMAIL:
        error.value = "Invalid email"
        break
      case AuthErrorCodes.WRONG_PASSWORD:
        error.value = "Wrong password"
        break
      case AuthErrorCodes.INVALID_CREDENTIAL:
        error.value = "Wrong password or Email"
        break
      default:
        error.value = "Something went wrong"
    }
  } finally {
    isPending.value = false
  }
}

export function useSignIn() {
  return {error, isPending, signIn}
}
