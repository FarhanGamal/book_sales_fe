import { Link } from "react-router-dom"
import { deleteBook, getBooks } from "../../../services/books"
import { useEffect, useState } from "react"
import { getGenres } from "../../../services/genres";
import { getAuthors } from "../../../services/author";

export default function Books() {
  const [books, setBooks] = useState([]);  
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  
  useEffect(() => {  
    const fetchBooks = async () => {  
      const data = await getBooks();  
      setBooks(data);  
    };
    
    const fetchGenres = async () => {  
      const data = await getGenres();  
      setGenres(data);  
    };

    const fetchAuthors = async () => {  
      const data = await getAuthors();  
      setAuthors(data);  
    };
  
    fetchBooks();  
    fetchGenres();  
    fetchAuthors();  
  }, [])

  // Fungsi untuk mendapatkan nama genre berdasarkan genre_id
  const getGenreName = (id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.name : "Uknown Genre";
  }
  // Fungsi untuk mendapatkan nama penulis berdasarkan genre_id
  const getAuthorName = (id) => {
    const author = authors.find((a) => a.id === id);
    return author ? author.name : "Uknown Author";
  } // if (author) {                  -> ini versi singkart dari kode if = return author ? author.name : "Uknown Author";
    //   return author.name;
    // } else {
    //   return "Unknown Author"
    // }
  
  const handleDelete = async (id) => {
    const confirmdelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?")
    
    if (confirmdelete) {
      await deleteBook(id)
      setBooks(books.filter(book => book.id !== id))
      alert("Data berhasil di hapus")
    }
    
  }



  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      <Link to={"/admin/books/create"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah data</Link>
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
                <img src= {`http://127.0.0.1:8000/storage/books/${book.cover_photo}`}/>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{getGenreName(book.genre_id)}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{getAuthorName(book.author_id)}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">

                  <Link to={`/admin/books/edit/${book.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button onClick={() => handleDelete(book.id)}>
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