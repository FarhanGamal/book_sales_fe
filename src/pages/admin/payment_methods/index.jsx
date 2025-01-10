import { Link } from "react-router-dom"
import { getPayment_methods } from "../../../services/payment_methods";
import { useEffect, useState } from "react";

export default function Payment_methods() {
  const [payment_methods, setPayment_methods] = useState([]);  
    
    useEffect(() => {  
      const fetchPayment_methods = async () => {  
        const data = await getPayment_methods();  
        setPayment_methods(data);  
      };  
    
      fetchPayment_methods();  
    }, []);
  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                Name
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Photo
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Bio
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

          {payment_methods.length > 0 ?
          payment_methods.map((payment_method) => (
          <tr key={payment_method.id} className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black dark:text-white">{payment_method.name}</h5>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{payment_method.account_number}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{payment_method.image}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to=""><i className="fa-solid fa-plus"></i></Link>
                  <Link to=""><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            
            )) : (
              <p>Tidak ada data payment</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}