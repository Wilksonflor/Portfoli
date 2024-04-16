import fotoPerfil from "../../assets/img/semFoto.jpg";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import styles from "./Sobre.module.css";

export const Sobre = () => {
  return (
    <>
      <section className={styles.perfil}>  


        <div className={styles.textContent}>
          <h1>Wilkson Flor </h1>
          <span>Desenvolvedor Front-End</span>
          <button>
            <VerticalAlignBottomOutlined />
            Download CV
          </button>
          {/* <button>Contato</button>
          <button>Linkedin</button>
          <button>GitHub</button> */}
        </div>

            {/* Div da foto do perfil */}
        <div>
          <img src={fotoPerfil} alt="" />
        </div>
      </section>
    </>
  );
};
