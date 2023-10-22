import React from "react";

const Navbar = () => {
  return (
    <nav
      className="
      hidden
    w-screen bg-black text-gray md:flex items-center justify-around h-20 font-bold "
    >
      <span>LOGO</span>
      <ul
        className="
       flex items-center
       "
      >
        <li className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Home</li>
        <li className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">About</li>
        <li className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Protfolio</li>
        <li className="ml-10 tracking-wider text-xl cursor-pointer hover:text-baseColor active:text-white">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
