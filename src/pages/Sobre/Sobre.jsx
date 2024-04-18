import { useState, useEffect } from "react";
import fotoPerfil from "../../assets/img/semFoto.jpg";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Sobre.module.css";
import curriculo from "../../../Desenvolvedor Front-End - Wilkson Flor Soares.pdf";

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
      <section className={styles.perfil}>
        <div className={styles.textContent}>
          <h1>Wilkson Flor</h1>
          <span>{cargoDigitando || "Desenvolvedor Front-End"}</span>
          <Button type="primary" onClick={downloadCurriculo}>
            <VerticalAlignBottomOutlined />
            Download CV
          </Button>
        </div>
        <div>
          <img src={fotoPerfil} alt="" />
        </div>
      </section>

      <section className={styles.containerDev}>
        <h2>Quem é Wilkson?</h2>
        <div>
          <p>
            Sou um apaixonado por código, nascido em Palmares-PE e atualmente
            estudante de Análise em Desenvolvimento de Sistemas. Passo boa parte
            do meu tempo desenvolvendo soluções criativas e funcionais para
            problemas complexos de software. Com habilidades sólidas em
            desenvolvimento web e uma mentalidade ágil, estou sempre pronto para
            encarar novos desafios e entregar resultados de alta qualidade.
          </p>

          <div>
            <div>
              <h3>Desenvolvimento front-end</h3>
              <p>
                Desenvolvo interfaces de usuário interativas e responsivas
                utilizando tecnologias web como HTML, CSS e JavaScript. Utilizo
                frameworks modernos como React.js para criar experiências de
                usuário dinâmicas e atraentes.
              </p>
            </div>
          </div>

          <h3>Desenvolvimento back-end</h3>
          <p>
            No backend, crio APIs robustas e escaláveis utilizando tecnologias
            como Node.js e Express.js. Desenvolvo endpoints RESTful que permitem
            a comunicação entre o front-end e o banco de dados, garantindo uma
            integração eficiente e segura das informações.
          </p>
        </div>
      </section>
    </>
  );
};
