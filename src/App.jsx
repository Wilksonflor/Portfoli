import "./App.css";
import { Navbar } from "./componenetes/Navbar/Navbar";
import { Habilidades } from "./pages/Habilidades/Habilidades";
import { Sobre } from "./pages/Sobre/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Sobre />
      <Habilidades/>
    </>
  );
}

export default App;
