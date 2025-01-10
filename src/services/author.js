import API from "../api"

export const getAuthors = async () => {
  const { data } = await API.get('/authors')    // ini untuk mengambil data saja
  return data.data
}