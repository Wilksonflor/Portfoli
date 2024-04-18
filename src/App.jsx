import "./App.css";
import { Navbar } from "./componenetes/Navbar/Navbar";
import { Habilidades } from "./pages/Habilidades/Habilidades";
import { Sobre } from "./pages/Sobre/Sobre";
import { Projetos } from "./pages/Projetos/Projetos";

function App() {
  return (
    <>
      <Navbar />
      <Sobre />
      <Habilidades />
      <Projetos />
    </>
  );
}

export default App;
