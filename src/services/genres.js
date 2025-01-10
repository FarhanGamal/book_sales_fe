import API from "../api"

export const getGenres = async () => {
  const { data } = await API.get('/genres')    // ini untuk mengambil data saja
  return data.data
}