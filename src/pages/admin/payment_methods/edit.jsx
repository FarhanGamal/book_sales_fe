import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPayment_methods, updatePayment_method } from "../../../services/payment_methods";

export default function Payment_methodEdit() {
  const[errors, setErrors] = useState({})

  const [imagea, setImagea] = useState("");
  const [name, setName] = useState("");
  const [account_number, setAccount_number] = useState("");

  // Destruck ID dari URL
  const { id } = useParams();
  const navigate = useNavigate()

  // fetch data buku berdasarkan ID
  const fetchPayment_methodsDetails = async () => {
    const data = await getPayment_methods(); // ambil semuah data buku

    // cari data buku berdasarkan ID

    const payment_method = data.find((payment_method) => payment_method.id === parseInt(id));
    if (payment_method) {
      // Asign data to state
      setName(payment_method.name);
      setAccount_number(payment_method.account_number);
    }
  };


  useEffect(() => {
    fetchPayment_methodsDetails()
  }, [])

  // handle file change
  const handleFileChange = (e) => {
    setImagea(e.target.files[0])
  }

  // update author data
  const updatePayment_methodDetail = async (e) => {
    e.preventDefault()

    // buat FormData
    const payment_methodData = new FormData()

    payment_methodData.append('name', name)
    payment_methodData.append('account_number', account_number)
    payment_methodData.append('_method', 'PUT')

    if (imagea) {
      payment_methodData.append('image', imagea)
    }

    await updatePayment_method(id, payment_methodData)
    .then(() => {
      // redirect ke halaman index
      navigate('/admin/payment_methods')
    })
    .catch((err) => {
      console.log(err)
      setErrors(err.response.data.message)
    })
  }
  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default dark:bg-boxdark"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"
        >
          <h3 className="font-medium text-black dark:text-white">
            Edit Data
          </h3>
        </div>
        <form onSubmit={ updatePayment_methodDetail } className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Name
              </label>
              {errors.name && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.name[0]}</span>
                </div>
                )}
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Account Number
              </label>
              {errors.account_number && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.account_number[0]}</span>
                </div>
                )}
              <input
                name="account_number"
                value={account_number}
                onChange={(e) => setAccount_number(e.target.value)}
                type="number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach file
              </label>
              {errors.image && (
                <div className="p-2 my-2 text-red-800 rounded-lg bg-red-50" role="alert">
                  <span className="font-medium">{errors.image[0]}</span>
                </div>
              )}
              <input
                onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
