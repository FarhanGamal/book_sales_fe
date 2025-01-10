import API from "../api"

export const getBooks = async () => {
  //return await API.get('/books') -> ini cara untuk menammpilkan semuah 
  const { data } = await API.get('/books')    // ini untuk mengambil data saja
  return data.data
}