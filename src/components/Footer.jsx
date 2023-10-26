import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center justify-center mt-20 mb-3 md:mb-2">
      <section className="flex items-center justify-center">
        <AiOutlineCopyrightCircle className= "text-sm text-[#555756]" />
        <p className="text-[#555756] text-sm font-extralight ml-1">Anas Ismail</p>
      </section>
      <p className="text-[#555756] font-thin text-sm">2023</p>
    </div>
  );
};

export default Footer;
