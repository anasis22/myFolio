import React from "react";
import { useData } from "../../contexts/DataContexts";

const MenuCategories = () => {
  const { isOpen } = useData();

  console.log(isOpen);

  return (
    <div>
      {isOpen && (
        <div className={`w-screen h-fit flex items-center justify-center absolute bg-[#1F1F1F] z-10 animate-menuCategOpen ${!isOpen && 'animate-menuCategClose'} `}>
          <ul
            className="
       flex flex-col items-center
       "
          >
            <li className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              Home
            </li>
            <li className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              About
            </li>
            <li className="mt-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              Protfolio
            </li>
            <li className="mt-8 mb-8 tracking-wider text-xl cursor-pointer text-gray hover:text-baseColor active:text-white">
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCategories;
