import { BsBootstrap } from "react-icons/bs";
import {
  FaReact,
  FaCss3,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaBars,
} from "react-icons/fa";
import { AiOutlineAntDesign, AiTwotoneHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

export const getIcon = (tecnologia) => {
  switch (tecnologia) {
    case "React":
      return <FaReact />;
    case "Antd":
      return <AiOutlineAntDesign />;
    case "CSS3":
      return <FaCss3 />;
    case "JavaScript":
      return <IoLogoJavascript />;
    case "Bootstrap":
      return <BsBootstrap />;
    case "Tailwind":
      return <SiTailwindcss />;
    case "HTML5":
      return <AiTwotoneHtml5 />;
    case "NodeJs":
      return <IoLogoNodejs />;
    case "MongoDB":
      return <SiMongodb />;
    case "Express":
      return <SiExpress />;
    default:
      return null;
  }
};

export const getGithubIcon = () => {
  return <FaGithub />;
};

export const getExternalLink = () => {
  return <FaExternalLinkAlt />;
};

export const getCodeIcon = () => {
  return <FaCode />;
};

export const getServericon = () => {
  return <FaServer />;
};

export const menuIcon = () => {
  return <FaBars />;
};

export const closeMenuIcon = () => {
  return <FaXmark />;
};
