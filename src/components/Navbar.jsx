import React from "react";

const Navbar = () => {
  return (
    <nav
      className="
    w-screen bg-black text-white flex items-center justify-around h-20 font-baseFamily font-semibold "
    >
      <logo>LOGO</logo>
      <ul
        className="
       flex items-center
       "
      >
        <li className="ml-10 tracking-widest text-xl">Home</li>
        <li className="ml-10 tracking-widest text-xl">About</li>
        <li className="ml-10 tracking-widest text-xl">Protfolio</li>
        <li className="ml-10 tracking-widest text-xl">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
