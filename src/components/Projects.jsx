import React, { useRef } from "react";
import { info } from "../info/Info";
import { motion,useScroll, useTransform } from "framer-motion";

const Projects = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset : ["0 1","0.8 1"]
    })
  
  const scaleProgress = useTransform(scrollYProgress,[0 , 1] , [0.9, 1])

  const alertMsg = () => {
    alert("This Repositery is private")
  }
  return (
    <motion.div style={{scale: scaleProgress , opacity: scrollYProgress}} ref={ref} className="w-screen bg-black h-fit flex flex-col items-center justify-center md:p-12">
        <h1 className="text-gray font-bold text-3xl tracking-wide mt-12 md:mt-0">PROJECTS</h1>
      <section className="w-4/5 md:w-3/4 mt-10 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              EUPHORIA
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://talrop-euphoria.netlify.app/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/talrop-euphoria">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              Grogin
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://talrop-grogin.netlify.app/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/talrop-grogin">Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
      {/* second section */}
      <section className="w-4/5 md:w-3/4 mt-10 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              Grogin
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://talrop-grogin.netlify.app/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/talrop-grogin">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              TASK TRACKER
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://anasis22.github.io/Task-tracker/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/Task-tracker">Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
      {/* third section */}
      <section className="w-4/5 md:w-3/4 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 mt-12 md:mt-0 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              WEATHER INFO
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://anasis22.github.io/Weather-Info/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/Weather-Info">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              STUDENT INFO
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://ece-students-info.web.app/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" onClick={alertMsg}>Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
      {/* fourth section */}
      <section className="w-4/5 md:w-3/4 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 mt-12 md:mt-0 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              BULK MAILER
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://anasis22.github.io/bulk-mailer/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/bulk-mailer">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-xl md:2xl text-[#EBECF0] font-semibold tracking-wider">
              BMI CALCULATOR
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://anasis22.github.io/bmi-calc/">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a target="_blank" href="https://github.com/anasis22/bmi-calc">Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default Projects;
