import axios from '@axios'

const getAlbums = async () => {
  const params = {
    ids: '3IBcauSj5M2A6lTeffJzdv'
  }
  const res = await axios.get(`/albums`,{params})
  return res.data
}

const Albums = {
  getAlbums
}

export default Albums
