import API from "../api"

export const getGenres = async () => {
  const { data } = await API.get('/genres')    // ini untuk mengambil data saja
  return data.data
}

export const createGenre = async (data) => {
  try {
  const response = await API.post('/genres', data) // endpoint
  return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const deleteGenre = async (id) => {
  try {
    await API.delete(`/genres/${id}`)
    } catch (err) {
      console.log(err)
      throw err
    }
}