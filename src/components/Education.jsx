import React from "react";

const Education = () => {
  return (
    <div className="w-screen h-fit bg-black flex flex-col items-center justify-center mt-10 md:mt-0 md:p-12">
      <div className="border-bw bg-[#1F1F1F] rounded-md p-4 md:p-8 border-l-8 border-l-baseColor flex flex-col items-left justify-center w-4/5 md:w-3/4 ">
        <h1 className="text-gray font-bold text-3xl tracking-wide">Education</h1>
        <h2 className="text-2xl text-white font-semibold mt-8">BE, Electronics and Communication Engineering</h2>
        <p className="text-lg text-[#6c757d] font-normal mt-8">Adhiyamaan College of Engineering</p>
        <p className="text-lg text-[#6c757d] font-normal mt-8">2020 - 2024</p>
      </div>
    </div>
  );
};

export default Education;
