import { auth } from '@/plugins/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AuthErrorCodes } from '@/constants/enums'

const error = ref<any>(null)
const isPending = ref<boolean>(false)

async function signUp(email: string, password: string, fullName: string) {
  isPending.value = true
  error.value = null
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser!, {displayName: fullName})
    return res
  } catch (err: any) {
    console.log(err)
    switch(err.code) {
      case AuthErrorCodes.EMAIL_ALREADY_IN_USE:
        error.value = "Email already in use"
        break
      case AuthErrorCodes.INVALID_EMAIL:
        error.value = "Invalid email"
        break
      case AuthErrorCodes.OPERATION_NOT_ALLOWED:
        error.value = "Operation not allowed"
        break
      case AuthErrorCodes.WEAK_PASSWORD:
        error.value = "Weak password"
        break
      default:
        error.value = "Something went wrong"
    }
  } finally {
    isPending.value = false
  }
}

export function useSignUp() {
  return {error, isPending, signUp}
}
