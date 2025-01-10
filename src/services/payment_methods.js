import API from "../api"

export const getPayment_methods = async () => {
  const { data } = await API.get('/payment_methods') 
  return data.data
}