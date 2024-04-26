import { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import { menuIcon, closeMenuIcon } from "../Icones/Icones";
import { Logo } from "../Logo/Logo";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${s.header} ${isScrolled ? s.scroll : ""}`}>
        <Logo />

        <button className={s.menuButton} onClick={toggleMenu}>
          {menuOpen ? closeMenuIcon() : menuIcon()}
        </button>

        <nav className={`${s.nav} ${menuOpen ? s.open : ""}`}>
          <ul>
            <li>
              <Link
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="habilidades"
                spy={true}
                smooth={true}
                offset={-300}
                // duration={500}
                onClick={toggleMenu}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                spy={true}
                smooth={true}
                offset={-90}
                // duration={600}
                onClick={toggleMenu}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
