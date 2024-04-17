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
        <div className={styles.contentDev}>
          <h2>Quem é Wilkson?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab
            facere ullam provident magnam? Consequatur.
          </p>
          <div className={styles.fullstack}>
            <h3>Desenvolvimento front-end</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              quas excepturi ad praesentium at corporis, neque perspiciatis
              delectus provident perferendis?
            </p>
          </div>
          <div className={styles.fullstack}>
            <h3>Desenvolvimento back-end</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              quas excepturi ad praesentium at corporis, neque perspiciatis
              delectus provident perferendis?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
