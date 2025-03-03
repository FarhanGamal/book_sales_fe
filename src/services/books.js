import API from "../api"

export const getBooks = async () => {
  //return await API.get('/books') -> ini cara untuk menammpilkan semuah 
  const { data } = await API.get('/books')    // ini untuk mengambil data saja
  return data.data
}

export const createBook = async (data) => {
  try {
    const response = await API.post('/books', data) // endpoint
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showBook = async (id) => {
  try {
    const { data } = await API.get(`/books/${id}`) // endpoint
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updateBook = async (id, data) => {
  try {
    const response = await API.post(`/books/${id}`, data)      // endpoint
    return response.data
} catch (err) {
    console.log(err)
    throw err
}
}

export const deleteBook = async (id) => {
  try {
    await API.delete(`/books/${id}`)
    } catch (err) {
      console.log(err)
      throw err
    }
}

export const currencyFormat = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price)
}