import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";
import { getGenres } from "../../../services/genres";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {

    // cara di bawah ini dimana sistem menjalankan dari atas ke bawah
    // const fetchBooks = async () => {
    //   const data = await getBooks();
    //   setBooks(data);
    // };

    // const fetchGenres = async () => {
    //   const data = await getGenres();
    //   setGenres(data);
    // };

    // fetchGenres();
    // fetchBooks();
    
    // sedangkan cara di bawah ini menunggu agar data semuah selesai dan menjalankan secara bersamaan
    const fetchData = async () => {
      const [booksData, genresData] = await Promise.all([getBooks(), getGenres()])

      setBooks(booksData)
      setGenres(genresData)
    }

    fetchData();

  }, []);

  // fungsi untuk mendapatkan data genre berdasarkan genre_id
  const bookGenre = books?.map((book) => {
    return {
      ...book,
      genre: genres.find((genre) => genre.id === book.genre_id),
    };
  });

  return <ProductList datas={bookGenre} />;
}
