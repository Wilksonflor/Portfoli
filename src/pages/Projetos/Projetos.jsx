import styles from "./Projetos.module.css";
import jordan from "../../assets/img/projetos/Jordan.png";
import cafe from "../../assets/img/projetos/café.png";
import conveniencia from "../../assets/img/projetos/conveniencia.png";
import residencial from "../../assets/img/projetos/residencial.png";
import { getIcon } from "../../componenetes/Icones/Icones";

import { Tag } from "antd";

export const Projetos = () => {
  const projetosList = [
    {
      titulo: "Projeto do Jordan Shoes",
      imagem: jordan,
      descricao:
        "Projeto desenvolvido através do layout da comunidade codelândia onde fiz algumas melhorias como a simulação do carrinho, adicionado mais alguns produtos e a animação do carro",
      tecnologias: ["React", "Antd"],
      urlProjeto: "https://shoesjordan.netlify.app/",
      gitHubProjeto:
        "https://github.com/Wilksonflor/JordanNike/tree/principal/wilksonFlor",
    },
    {
      titulo: "Projeto Café",
      imagem: cafe,
      descricao:
        "Projeto de uma cafeteria online onde os usuários podem fazer pedidos e agendar horários de entrega.",
      tecnologias: ["React", "Bootstrap"],
      urlProjeto: "https://cafeonline.netlify.app/",
      gitHubProjeto: "https://github.com/Wilksonflor/CafeOnline",
    },
    {
      titulo: "Projeto Residencial",
      imagem: residencial,
      descricao: "Projeto feito baseado no layout da comunidade Codelândia ",
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      urlProjeto: "https://convenienciaonline.netlify.app/",
      gitHubProjeto: "https://github.com/Wilksonflor/ConvenienciaOnline",
    },
    {
      titulo: "Projeto para uma conveniência local",
      imagem: conveniencia,
      descricao:
        "Projeto em desenvolvimento para uma conveniência local onde tem atualização de pedido, cadastro de produtos e controle de estoque ",
      tecnologias: ["NodeJs", "Express", "MongoDB"],
      urlProjeto: "https://convenienciaonline.netlify.app/",
      gitHubProjeto: "https://github.com/Wilksonflor/ConvenienciaOnline",
    },
  ];

  return (
    <section id="projetos" className={styles.sectionProjetos}>
      <h2>Projetos</h2>

      <div className={styles.containerCards}>
        {projetosList.map((projeto, index) => (
          <div key={index} className={styles.boxCards}>
            <img src={projeto.imagem} alt={projeto.titulo} />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div>
              {projeto.tecnologias.map((tecnologia, index) => (
                <Tag key={index} icon={getIcon(tecnologia)}>
                  {tecnologia}
                </Tag>
              ))}
            </div>
            <div>
              <a href={projeto.urlProjeto}>Ver projeto</a>
              <a href={projeto.gitHubProjeto}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
