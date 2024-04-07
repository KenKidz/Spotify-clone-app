import axios from 'axios'
import router from '@/router'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'X-RapidAPI-Key': '765d1445aamshbca03f2813daa2fp1fbea9jsn5404a8b09d71',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  },
})

export default axiosIns
