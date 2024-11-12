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
import nextLogo from "../assets/images/nextjs.svg"


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
  bio: "Hello! I'm Anas Ismail, a dedicated web developer with strong skills in HTML, CSS, JavaScript, and React, along with experience in frameworks like Next.js and Django. I've built projects such as e-commerce platforms and interactive components, with a focus on delivering smooth, engaging user experiences. Additionally, I have a foundational knowledge of networking and telecommunications and am eager to expand my expertise in these fields.",
  bio2 : "Passionate about continuous learning and growth, I'm excited to bring my skills, creativity, and drive to a professional team. If you're looking for a motivated developer ready to make an impact, let's connect!",
  // bio3 : "The goal is not just to find a job, but to embark on a career where I can continue expanding my knowledge, embracing new challenges, and evolving into a well-rounded software developer. If you're looking for a motivated and adaptable developer to join your team, I'd love to connect and explore opportunities together.",
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
  nextjs : nextLogo,
  template : template,
  logo : logo,
};


