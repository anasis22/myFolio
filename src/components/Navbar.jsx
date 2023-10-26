import React from "react";
import {HashLink as Link } from "react-router-hash-link";
import { info } from "../info/Info";
import { useData } from "../../contexts/DataContexts";

const Navbar = () => {

  const {loadAnasPage} = useData()

  return (
    <nav
      className="
      hidden
    w-screen bg-black text-gray md:flex items-center justify-around h-20 font-bold animate-entryNavbar fixed z-10 md:pt-10 md:pb-6 "
    >
      <img src={info.logo} alt="logo" onClick={loadAnasPage} className="w-12 mb-4 cursor-pointer" />
      <ul
        className="
       flex items-center
       "
      >
        <Link to="#home" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Home</Link>
        <Link to="#about" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">About</Link>
        <Link to="#techSatck" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Protfolio</Link>
        <Link to="#contact" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
