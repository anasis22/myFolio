import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center justify-center">
      <section className="flex items-center justify-center">
        <AiOutlineCopyrightCircle className= "text-sm text-gray" />
        <p className="text-gray font-extralight ml-1">Anas Ismail</p>
      </section>
      <p className="text-gray font-extralight text-sm">2023</p>
    </div>
  );
};

export default Footer;
