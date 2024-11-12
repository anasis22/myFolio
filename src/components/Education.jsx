import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: scrollYProgress }}
      className="w-screen h-fit bg-black flex flex-col items-center justify-center mt-10 md:mt-0 md:p-12"
    >
      <div className="border-bw bg-[#1F1F1F] rounded-md p-4 md:p-8 md:pl-12 border-l-8 border-l-baseColor flex flex-col items-left justify-center w-4/5 md:w-3/4 ">
        <div>
          <h1 className="text-gray font-bold text-3xl tracking-wide">
            Experience
          </h1>
          <h2 className="text-2xl text-white font-semibold mt-8">
            Web Developer Intern
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-8">
            Talrop, Kerala
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-8">Present</p>
        </div>
        <div className="mt-6">
          <h1 className="text-gray font-bold text-3xl tracking-wide">
            Education
          </h1>
          <h2 className="text-2xl text-white font-semibold mt-8">
            BE, Electronics and Communication Engineering
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-8">
            Adhiyamaan College of Engineering
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-8">2020 - 2024</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
