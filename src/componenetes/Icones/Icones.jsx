import { BsBootstrap } from "react-icons/bs";
import { FaReact, FaCss3 } from "react-icons/fa";
import { AiOutlineAntDesign, AiTwotoneHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io";

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