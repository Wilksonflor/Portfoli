import styles from "./Projetos.module.css";
import { projetosList } from "./ProjetosList";
import {
  getIcon,
  getGithubIcon,
  getExternalLink,
} from "../../componenetes/Icones/Icones";
import { Tag, Carousel } from "antd";

export const Projetos = () => {
  return (
    <section id="projetos" className={styles.sectionProjetos}>
      <h2>Projetos</h2>
      <Carousel
        autoplay
        pauseOnHover
        dots={false}
        className={styles.carouselWrapper}
        responsive={[
          {
            breakpoint: 2600,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {projetosList.map((projeto, index) => (
          <div key={index} className={styles.boxCards}>
            <img src={projeto.imagem} alt={projeto.titulo} />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>

            <div className={styles.tecnologias}>
              {projeto.tecnologias.map((tecnologia, index) => (
                <Tag
                  key={index}
                  icon={getIcon(tecnologia)}
                  className={styles.tags}
                >
                  {tecnologia}
                </Tag>
              ))}
            </div>
            <div className={styles.linksGitAndExt}>
              <a
                href={projeto.urlProjeto}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getExternalLink()}
                Ver projeto
              </a>
              <a
                href={projeto.gitHubProjeto}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getGithubIcon()} GitHub
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projetos;
