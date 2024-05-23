import { storage } from '@/plugins/firebaseConfig'
import { ref as firebaseRef, uploadBytes, getDownloadURL  } from "firebase/storage";
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const useStorage = (name: any) => {
  const error = ref<any>(null)
  const filePath = ref<any>(null)
  const url = ref<any>(null)
  const isPending = ref<boolean>(false)

  async function uploadFile(file: any) {
    isPending.value = true
    filePath.value = `${name}/${userStore.userInfo?.uid}/${file.name}`
    const fileRef = firebaseRef(storage, filePath.value)
    error.value = null
    try{
      const res = await uploadBytes(fileRef, file)
      url.value = await getDownloadURL(res.ref)
      return url.value
    } catch (err: any) {
      console.log(err)
      error.value = err.message
    } finally {
      isPending.value = false
    }
  }
  return { error, filePath, url, uploadFile }
}

export default useStorage
