import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Row, Col } from "antd";
import { getIconLkd, getIconInsta, getGithubIcon } from "../Icones/Icones";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="contato" data-aos="fade-right">
      <Row
        gutter={[8, 8]}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="text-center">
          <nav className={styles.navFooter}>
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
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          className="text-center"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/wilkson-flor-a50b4066/"
              target="_blank"
              className={styles.iconLkd}
            >
              {getIconLkd()}
            </a>
            <a
              href="https://github.com/Wilksonflor"
              target="_blank"
              className={styles.iconGH}
            >
              {getGithubIcon()}
            </a>
            <a
              href="https://www.instagram.com/wilksonsoares?igsh=emtxMzJqN3J0OGNz"
              target="_blank"
              className={styles.iconInsta}
            >
              {getIconInsta()}
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};
