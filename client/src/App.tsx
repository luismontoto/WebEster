import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import Opiniones from "./components/Opiniones";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Opiniones />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
