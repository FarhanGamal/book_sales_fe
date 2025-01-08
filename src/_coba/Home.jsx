// import Footer from "./components/shared/Footer";
// import Contact from "./components/shared/Contact";
// import Team from "./components/shared/Team";
// import Navbar from "./components/shared/Navbar";
// import Genre from "./pages/Genre";
// import Hero from "./components/shared/Hero/Hero";
// import Author from "./pages/author";
// import Login from "./pages/auth/login";
// import Register from "./pages/auth/register";

import { useState } from "react";

const initAutomotive = [
  {car: "Toyota"},
  {car: "Audi"},
  {car: "Tesla"},
  
]

function Home() {
  // let angka = 0;
  // const [angka, setAngka] = useState(0)

  // function inClick() {
  //   // angka = angka + 1;
  //   setAngka(angka + 1)
  // }

  // function deClick() {
  //   // angka = angka - 1;
  //   setAngka(angka - 1)
  // }
  const [car, setCars] = useState('')
  const [automotive, setAutomotive] = useState(initAutomotive)

  const handleChange = (event) => {
    setCars (event.target.value) // memperbarui state car ketika input berubah  
  }

  const handleSubmit = () => {
    event.preventDefault()  // Mencegah reload halaman
    if (car.trim() !== ''){ // pastikan input tidak boleh kosong
      setAutomotive([...automotive, { car }]) // menambahkan data ke state automotive
      setCars('') // kosongkan input ketika submit telah berhasil
    }
  }

  console.log(car);
  console.log(automotive);

    return(
      // <>
      //   {/* <Header />
      //   <Main tech="Laravel" btn="Belajar React"/>
      //   <Footer /> */}
      //   {/* <Navbar /> */}
      //   {/* <Login />
      //   <Register /> */}
      //   {/* <Footer /> */}
      //   <Genre />
      // </>
      // <div className="w-1/2 mx-auto">
      //   <p className="">Angka :{ angka }</p>
      //   <button onClick={() => setAngka(angka + 1)} className="py-3 px-5 bg-rose-300">  // ini penggunaan arrow function dan cara biasa menggunakan onClick
      //     Increment
      //   </button>
      //   <button onClick={() => setAngka(angka - 1)} className="py-3 px-5 bg-rose-300">
      //     Decrement
      //   </button>
      // </div>
      <>
        {/* Tampilkan data */}
        <ul className="w-1/2 mx-auto py-12 my-12 border">
          <h2>Data Nama:</h2>
          {automotive.map((automobile , index) => (
          <li key={index}>{automobile.car}</li>
          ))}
        </ul>

        {/* Bikin Form */}
        <div className="w-1/2 mx-auto py-12 my-12 border">
        <h1>Masukan Nama Anda!</h1>
          <form onSubmit={handleSubmit}>
            <input value={car} onChange={handleChange} name="car" type="text" className="border"/>
            <br />
            <button type="submit" className="border">Kirim</button>
          </form>
        </div>
      </>
    );
}

export default Home;