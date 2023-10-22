import React from "react";
import { info } from "../info/Info";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const links = {
    gmail : "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlGVLcvHRnZCkScCvFscxctCSjBTMWqNkqkvszVrxdvNbmrbdLhnBkkWNfJCQtJBpKQZlV",
    linkedin : "https://www.linkedin.com/in/msanasismail/",
    github : "https://github.com/anasis22"
}

const Home = () => {


  return (
    <div
      className="
     bg-black w-screen h-3/5 flex items-center justify-center font-bold md:ml-8 mt-20
    "
    >
      <section
        className="
         w-4/5 md:w-3/4 h-fit flex items-start justify-center text-white flex-col
        "
      >
        <section className="flex">
          <h1
            className="
            text-4xl md:text-6xl mt-4 md:mt-6 text-baseColor 
        "
          >
            Hello
          </h1>
          <span className="text-4xl md:text-6xl mt-4 md:mt-6 ml-2 animate-waveHand origin-[70%_70%]">
            🤚
          </span>
        </section>

        <h1
          className="
          text-4xl md:text-6xl mt-4 md:mt-6
        "
        >
          I'm{" "}
          <span
            className="
          gradientText
          "
          >
            {info.firstName}
          </span>
        </h1>
        <TypeAnimation
          className="text-baseColor h-32 text-4xl md:text-6xl mt-4 md:mt-6 "
          sequence={["Web Developer.", 1000, "Front End Developer.", 1000]}
          repeat={Infinity}
          speed={10}
          deletionSpeed={40}
        />
        <section className=" flex">
          <a target="_blank" aria-hidden="true" href={links.gmail}><AiFillMail className="text-gray text-2xl cursor-pointer" /></a>
          <a target="_blank" aria-hidden="true" href={links.linkedin}><AiFillLinkedin className="text-gray text-2xl ml-4 cursor-pointer" /></a>
          <a target="_blank" aria-hidden="true" href={links.github}><AiFillGithub className="text-gray text-2xl ml-4 cursor-pointer" /></a>
        </section>
      </section>
    </div>
  );
};

export default Home;
