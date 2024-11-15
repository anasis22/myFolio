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
          <h2 className="text-2xl text-white font-semibold mt-6">
            Web Developer Intern
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-6">
            Talrop, Kerala
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-6">06/2024 - Present</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl text-white font-semibold mt-6">
            Web Developer Intern
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-6">
            Innobyte Services
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-6">01/2024 - 03/2024</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl text-white font-semibold mt-6">
            Web Developer Intern
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-6">
            Exposys Data Labs
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-6">07/2023 - 09/2023</p>
        </div>
        <div className="mt-12">
          <h1 className="text-gray font-bold text-3xl tracking-wide">
            Education
          </h1>
          <h2 className="text-2xl text-white font-semibold mt-6">
            BE, Electronics and Communication Engineering
          </h2>
          <p className="text-lg text-[#6c757d] font-normal mt-6">
            Adhiyamaan College of Engineering
          </p>
          <p className="text-lg text-[#6c757d] font-normal mt-6">2020 - 2024</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
