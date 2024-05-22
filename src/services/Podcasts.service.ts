import axios from '@axios'

const getPodcasts = async () => {
  const params = {
    id: '0ofXAdFIQQRsCYj9754UFx'
  }
  const res = await axios.get(`/podcast_episodes`,{params})
  return res.data
}

const Podcasts = {
  getPodcasts
}

export default Podcasts
