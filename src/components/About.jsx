import React, { useRef } from "react";
import { info } from "../info/Info";
import { motion,useScroll, useTransform } from "framer-motion";

const About = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1","0.8 1"]
  })

const scaleProgress = useTransform(scrollYProgress,[0 , 1] , [0.5, 1])


  return (
    <motion.div id="about" style={{scale: scaleProgress , opacity: scrollYProgress}} ref={ref} className="w-screen h-fit bg-black flex flex-col items-center justify-center md:p-12 mt-36 ">
      <div className="border-bw bg-[#1F1F1F] rounded-md p-4 md:p-8 border-l-8 border-l-baseColor flex flex-col items-center justify-center w-4/5 md:w-3/4 ">
        <h1 className="text-gray font-bold text-3xl tracking-wide">ABOUT</h1>
        <img className="w-3/4 h-3/4 md:w-1/4 md:h-1/4" src={info.selfImg} alt="selfImg" />
        <p className="text-white font-extralight md:pr-8 md:pl-8 text-md md:text-md mt-10 tracking-wider md:tracking-widest">{info.bio}</p>
        <p className="text-white font-extralight md:pr-8 md:pl-8 text-md md:text-md mt-10 tracking-wider md:tracking-widest">{info.bio2}</p>
        <p className="text-white font-extralight md:pr-8 md:pl-8 text-md md:text-md mt-10 tracking-wider md:tracking-widest">{info.bio3}</p>
      </div>
    </motion.div>
  );
};

export default About;
