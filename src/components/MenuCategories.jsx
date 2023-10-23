import React from "react";
import { useData } from "../../contexts/DataContexts";
import { HashLink as Link } from "react-router-hash-link";

const MenuCategories = () => {
  const { isOpen } = useData();

  return (
    <div>
      {isOpen && (
        <div className={`w-screen h-fit flex items-center justify-center absolute bg-[#1F1F1F] z-10 animate-menuCategOpen ${!isOpen && 'animate-menuCategClose'} `}>
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
            {/* <li className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              Protfolio
            </li> */}
            <li className="mt-8 mb-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              Contact
            </li>
            <Link to="#about" className="text-white" >About</Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCategories;
