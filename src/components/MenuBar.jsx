import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useData } from "../../contexts/DataContexts";
import { HashLink as Link } from "react-router-hash-link";
import { info } from "../info/Info";

const MenuBar = () => {
  const { isOpen, toggleMenu } = useData();
  return (
    <nav
      className="
      md:hidden 
    w-screen bg-black text-gray flex items-center justify-end h-20 pr-8 animate-entryNavbar fixed right-0 z-10"
    >
      <img src={info.logo} alt="logo" className="w-12 absolute left-4 top-3" />
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
      <div>
        {isOpen && (
          <div
            className={`w-screen mt-5 h-fit flex items-center justify-center fixed left-0 bg-[#1F1F1F] z-10 animate-menuCategOpen ${
              !isOpen && "animate-menuCategClose"
            } `}
          >
            <ul
              className="
       flex flex-col items-center
       "
            >
              <Link to="#home" smooth className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
                Home
              </Link>
              <Link to="#about" smooth className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
                About
              </Link>
              <Link to="#techSatck" smooth  className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
                Protfolio
              </Link>
              <Link to="#contact" smooth className="mt-8 mb-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
                Contact
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuBar;
