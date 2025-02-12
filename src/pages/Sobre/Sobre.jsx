import { useState, useEffect } from "react";
import fotoPerfil from "../../assets/img/wilkson1.png";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import { getCodeIcon, getServericon } from "../../componenetes/Icones/Icones";
import { Button } from "antd";
import styles from "./Sobre.module.css";
import curriculo from "../../../Wilkson Flor Soares.pdf";

export const Sobre = () => {
  const [cargoDigitando, setCargoDigitando] = useState("");
  const [indiceCargo, setIndiceCargo] = useState(0);
  const cargoCompleto = "Desenvolvedor Front-End";

  useEffect(() => {
    const timerCargo = setTimeout(() => {
      if (indiceCargo < cargoCompleto.length) {
        setCargoDigitando(cargoCompleto.substring(0, indiceCargo + 1));
        setIndiceCargo(indiceCargo + 1);
      } else {
        setIndiceCargo(0);
      }
    }, 200);

    return () => clearTimeout(timerCargo);
  }, [indiceCargo, cargoCompleto]);

  const downloadCurriculo = () => {
    window.open(curriculo, "_blank");
  };

  return (
    <>
      <section className={styles.perfil} id="sobre" data-aos="fade-left">
        <div className={styles.textContent}>
          <h1>Wilkson Flor</h1>
          <p className={styles.cargo}>
            {cargoDigitando || "Desenvolvedor Front-End"}
          </p>
          <Button type="primary" onClick={downloadCurriculo}>
            <VerticalAlignBottomOutlined />
            Download CV
          </Button>
        </div>
        <div className={styles.fotoPerfil}>
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>
      </section>

      <section className={styles.containerDev} data-aos="fade-right">
        <h2>Quem é Wilkson?</h2>
        <div className={styles.containerSobreSt}>
          <div className={styles.textSobre}>
            <p>
              Sou apaixonado por tecnologia, nascido em Palmares-PE e atualmente
              estudante de Análise e Desenvolvimento de Sistemas. Dedico meu
              tempo à criação de soluções criativas e eficientes para desafios
              complexos de software. Com sólida experiência em desenvolvimento
              web e uma mentalidade ágil, estou sempre em busca de novos
              desafios, focado em entregar resultados de alta qualidade.
            </p>
          </div>

          <div className={styles.containerStacks}>
            <div className={styles.contentStack}>
              <span>{getCodeIcon()}</span>
              <div className={styles.textSS}>
                <h3>Desenvolvedor Front-end</h3>
                <p>
                  Desenvolvo interfaces de usuário interativas e responsivas
                  utilizando tecnologias web como HTML, CSS e JavaScript.
                  Utilizo frameworks modernos como React.js para criar
                  experiências de usuário dinâmicas e atraentes.
                </p>
              </div>
            </div>

            <div className={styles.contentStack}>
              <span>{getServericon()}</span>
              <div className={styles.textSS}>
                <h3>Desenvolvedor Back-end</h3>
                <p>
                  No backend, crio APIs robustas e escaláveis utilizando
                  tecnologias como Node.js e Express.js. Desenvolvo endpoints
                  RESTful que permitem a comunicação entre o front-end e o banco
                  de dados, garantindo uma integração eficiente e segura das
                  informações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
