import React from "react";
import { CiMenuFries } from "react-icons/ci";
import {AiOutlineClose} from 'react-icons/ai'
import { useData } from "../../contexts/DataContexts";

const MenuBar = () => {
  const { isOpen, toggleMenu } = useData();
  return (
    <nav
      className="
      md:hidden 
    w-screen bg-black text-gray flex items-center justify-end h-20 pr-8 "
    >
      <CiMenuFries
        className={`text-2xl cursor-pointer hover:text-baseColor ${
          isOpen && "animate-menuCategClose"
        }`}
        onClick={toggleMenu}
      />
      <AiOutlineClose
        className={`absolute text-2xl cursor-pointer hover:text-baseColor ${
          !isOpen && "animate-menuCategClose"
        }`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default MenuBar;
