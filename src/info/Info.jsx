import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import self from "../assets/images/aboutImg4.png"
import htmlLogo from "../assets/images/html.png"
import cssLogo from "../assets/images/css.png"
import jsLogo from "../assets/images/js.png"
import reactLogo from "../assets/images/react.png"
import tailwindLogo from "../assets/images/tailwind.svg"
import reduxLogo from "../assets/images/redux.svg"
import framerMotionLogo from "../assets/images/framerMotion1.png"
import viteLogo from "../assets/images/vite.svg"
import firebaseLogo from "../assets/images/firebase.svg"
import gitLogo from "../assets/images/git.svg"
import figmaLogo from "../assets/images/figma.svg"
import template from "../assets/images/temp.png"
import logo from "../assets/images/logo.png"


const icons = [<AiFillMail />, <AiFillLinkedin />, <AiFillGithub />];
export const info = {
  firstName: "Anas",
  lastName: "Ismail",
  selfImg : self,
  social: [
    {
      link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlGVLcvHRnZCkScCvFscxctCSjBTMWqNkqkvszVrxdvNbmrbdLhnBkkWNfJCQtJBpKQZlV",
      icon: icons[0],
      label: "gmail",
    },
    {
      link: "https://www.linkedin.com/in/msanasismail/",
      icon: icons[1],
      label: "linkedin",
    },
    {
      link: "https://github.com/anasis22",
      icon: icons[1],
      label: "github",
    },
  ],
  bio: "Hello! My name is Anas Ismail and I'm a junior web developer, specializing in frontend technologies. With a strong foundation in HTML, CSS, and JavaScript, I've also honed my skills in React and several frontend libraries. Through personal projects, I've gained practical experience and a keen understanding of the development process.",
  bio2 : "My journey in web development is driven by a relentless passion for crafting intuitive and visually appealing user experiences. I'm actively seeking an entry-level position, where I can collaborate with experienced professionals and contribute my energy, ideas, and dedication to the team.",
  bio3 : "The goal is not just to find a job, but to embark on a career where I can continue expanding my knowledge, embracing new challenges, and evolving into a well-rounded software developer. If you're looking for a motivated and adaptable developer to join your team, I'd love to connect and explore opportunities together.",
  html : htmlLogo,
  css : cssLogo,
  js : jsLogo,
  react : reactLogo,
  tailwind : tailwindLogo,
  redux : reduxLogo,
  framerMotion : framerMotionLogo,
  vite : viteLogo,
  firebase : firebaseLogo,
  git : gitLogo,
  figma : figmaLogo,
  template : template,
  logo : logo,
};


