import API from "../api"

export const getPayment_methods = async () => {
  const { data } = await API.get('/payment_methods') 
  return data.data
}

export const createPayment_methods = async (data) => {
  try {
  const response = await API.post('/payment_methods', data) // endpoint
  return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updatePayment_method = async (id, data) => {
  try {
    const response = await API.post(`/payment_methods/${id}`, data)      // endpoint
    return response.data
} catch (err) {
    console.log(err)
    throw err
}
}

export const deletePayment_methods = async (id) => {
  try {
    await API.delete(`/payment_methods/${id}`)
    } catch (err) {
      console.log(err)
      throw err
    }
}