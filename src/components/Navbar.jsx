import React from "react";
import {HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav
      className="
      hidden
    w-screen bg-black text-gray md:flex items-center justify-around h-20 font-bold animate-entryNavbar fixed z-10 md:pt-10 md:pb-6 "
    >
      <span>LOGO</span>
      <ul
        className="
       flex items-center
       "
      >
        <Link to="#home" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Home</Link>
        <Link to="#about" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">About</Link>
        <Link to="#techSatck" smooth className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Protfolio</Link>
        <Link className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
