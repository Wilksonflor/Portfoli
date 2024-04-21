import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Navbar.module.css";
import { menuIcon, closeMenuIcon } from "../Icones/Icones";
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={s.header}>
        <Link to={"/"}>
          <Logo />
        </Link>

        <button className={s.menuButton} onClick={toggleMenu}>
          {menuOpen ? closeMenuIcon() : menuIcon()}
        </button>

        <nav className={`${s.nav} ${menuOpen ? s.open : ""}`}>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
