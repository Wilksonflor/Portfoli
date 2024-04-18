import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <header style={s.header}>
        <Link to={"/"}>
          <h3>
            Wilkson Flor<span>.</span>
          </h3>
        </Link>

        <nav>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="habilidades">Habilidades</a>
            </li>
            <li>
              <a href="projetos">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
