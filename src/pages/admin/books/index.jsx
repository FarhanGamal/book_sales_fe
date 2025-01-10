import { Link } from "react-router-dom"
import { getBooks } from "../../../services/books"
import { useEffect, useState } from "react"

export default function Books() {
  const [books, setBooks] = useState([]);  
  
  useEffect(() => {  
    const fetchBooks = async () => {  
      const data = await getBooks();  
      setBooks(data);  
    };  
  
    fetchBooks();  
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
                className=" px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                Title
              </th>
              <th
                className=" px-4 py-4 font-medium text-black dark:text-white"
              >
                Description
              </th>
              <th
                className=" px-4 py-4 font-medium text-black dark:text-white"
              >
                Stock
              </th>
              <th
                className=" px-4 py-4 font-medium text-black dark:text-white"
              >
                Cover Photo
              </th>
              <th
                className=" px-4 py-4 font-medium text-black dark:text-white"
              >
                Genre
              </th>
              <th
                className=" px-4 py-4 font-medium text-black dark:text-white"
              >
                Author
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

          {books.length > 0 ?
          books.map((book) => (
            <tr key={book.id} className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black dark:text-white">{book.title}</h5>
                <p className="text-sm">{book.price}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.description}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.stock}</p>
              </td>
              <td className="px-4 py-5">
                {/* <p className="text-black dark:text-white">{book.cover_photo}</p> */}
                <img src= "https://comicvine.gamespot.com/a/uploads/original/11160/111605805/8543076-luffy_gear_5_by_xavierjvg_df4256z-fullview.jpg"/>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.genre_id}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.author_id}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="/admin/books/create"><i className="fa-solid fa-plus"></i></Link>
                  <Link to="/admin/books/edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            )) : (
              <p>Tidak ada data buku</p>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}