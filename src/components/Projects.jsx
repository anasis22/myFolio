import React, { useRef } from "react";
import { info } from "../info/Info";
import { motion,useScroll, useTransform } from "framer-motion";

const Projects = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset : ["0 1","0.8 1"]
    })
  
  const scaleProgress = useTransform(scrollYProgress,[0 , 1] , [0.5, 1])

  return (
    <motion.div style={{scale: scaleProgress , opacity: scrollYProgress}} ref={ref} className="w-screen bg-black h-fit flex flex-col items-center justify-center md:p-12">
        <h1 className="text-gray font-bold text-3xl tracking-wide mt-12 md:mt-0">PROJECTS</h1>
      <section className="w-4/5 md:w-3/4 mt-10 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-2xl text-[#EBECF0] font-semibold tracking-wider">
              PROJECT ONE
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-2xl text-[#EBECF0] font-semibold tracking-wider">
              PROJECT ONE
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
      {/* Second section */}
      <section className="w-4/5 md:w-3/4 md:p-8 bord flex flex-col md:flex-row items-center justify-center ">
        <section className="w-full md:w-2/5 mt-12 md:mt-0 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-2xl text-[#EBECF0] font-semibold tracking-wider">
              PROJECT ONE
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Code</a>
              </button>
            </section>
          </section>
        </section>
        <section className="w-full md:w-2/5 mt-12 md:mt-0 md:ml-20 rounded-md bg-[#1F1F1F] hover:animate-projectHover hover:origin-[70%_70%]">
          <img className="" src={info.template} alt="template" />
          <section className="p-6 text-white">
            <h3 className="text-2xl text-[#EBECF0] font-semibold tracking-wider">
              PROJECT ONE
            </h3>
            <section className="mt-4 flex items-start">
              <button className="rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Live</a>
              </button>
              <button className="ml-10 rounded-md border-2 border-[#70F6C0] hover:border-white pt-pad pb-pad pl-3 pr-3 hover:text-baseColor transition-all">
                <a href="">Code</a>
              </button>
            </section>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default Projects;
