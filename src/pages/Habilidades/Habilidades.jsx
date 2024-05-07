import imgReact from "../../assets/img/linguagens/React.png";
import node from "../../assets/img/linguagens/node.png";
import sql from "../../assets/img/linguagens/mysql.png";
import docker from "../../assets/img/linguagens/docker.png";
import css from "../../assets/img/linguagens/css3.png";
import html from "../../assets/img/linguagens/html.png";
import mongo from "../../assets/img/linguagens/mongo.png";
import nassau from "../../assets/img/formação/nassau.png";
import vnw from "../../assets/img/formação/vnw.png";
import styles from "./Habilidades.module.css";

export const Habilidades = () => {
  return (
    <>
      <section
        className={styles.containerSkills}
        id="habilidades"
        data-aos="fade-up"
      >
        <h2>Habilidades e formação</h2>
        <div className={styles.skillsWrapper}>
          <div className={styles.boxSkill}>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={css} alt="" />
              </div>

              <h3>CSS3</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={html} alt="" />
              </div>
              <h3>HTML5</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={imgReact} alt="" />
              </div>

              <h3>ReactJs</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={node} alt="" />
              </div>
              <h3>NodeJs</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={sql} alt="" />
              </div>
              <h3>MySql</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={docker} alt="" />
              </div>
              <h3>Docker</h3>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImg}>
                <img src={mongo} alt="" />
              </div>
              <h3>MongoDB</h3>
            </div>
          </div>

          <section className={styles.sectionFormacao}>
            <div className={styles.cursosContainer}>
              <img src={nassau} alt="" />
              <div className={styles.textFormacao}>
                <h2>Análise e Desenvolvimento de Sistemas</h2>
                <p>UNINASSAU</p>
                <p>Junho, 2023 - Presente</p>
              </div>
            </div>
            <div className={styles.cursosContainer}>
              <img src={vnw} alt="" />
              <div className={styles.textFormacao}>
                <h2>Desenvolvimento Front-end</h2>
                <p>Vai na Web</p>
                <p>Setembro, 2023 - Maio, 2024</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
