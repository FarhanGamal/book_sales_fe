import Footer from "./components/shared/Footer";
import Contact from "./components/shared/Contact";
import Team from "./components/shared/Team";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero/Hero";

function Home() {
    return(
      <>
        {/* <Header />
        <Main tech="Laravel" btn="Belajar React"/>
        <Footer /> */}
        <Navbar />
        <Hero />
        <Team />
        <Contact />
        <Footer />
      </>
    );
}

export default Home;