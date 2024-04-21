import "./App.css";
import { Navbar } from "./componenetes/Navbar/Navbar";
import { Habilidades } from "./pages/Habilidades/Habilidades";
import { Sobre } from "./pages/Sobre/Sobre";
import { Projetos } from "./pages/Projetos/Projetos";
import { Footer } from "./componenetes/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <>
      <Navbar />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
