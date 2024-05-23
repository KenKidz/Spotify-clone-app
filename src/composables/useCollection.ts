import { fireStoreCore } from '@/plugins/firebaseConfig'
import { addDoc, doc, setDoc, collection } from 'firebase/firestore'

const useCollection = (name: string) => {
  const error = ref<any>(null)
  async function addRecord(record: any) {
    error.value = null
    try{
      const res = await addDoc(collection(fireStoreCore, name), record)
      return res
    } catch (err: any) {
      console.log(err)
      error.value = err.message
    }
  }

  async function setRecord(record: object, documentId: string) {
    error.value = null
    try{
      const res = await setDoc(doc(fireStoreCore, name, documentId), record)
      return res
    } catch (err: any) {
      console.log(err)
      error.value = err.message
    }
  }
  return { error, addRecord, setRecord }
}

export default useCollection
