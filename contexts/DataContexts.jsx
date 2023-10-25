import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const value = {
    isOpen,
    toggleMenu,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
