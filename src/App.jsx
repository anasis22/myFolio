import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScrollArrow from "./components/ScrollArrow";
import About from "./components/About";
import Education from "./components/Education";
import MenuBar from "./components/MenuBar";
import MenuCategories from "./components/MenuCategories";
import { DataProvider } from "../contexts/DataContexts";
import TechStacks from "./components/TechStacks";

const App = () => {
  return (
    <div
      className="
    bg-black
    "
    >
      <DataProvider>
        <Navbar />
        <MenuBar />
        <MenuCategories />
        <Home />
        <ScrollArrow />
        <About />
        <Education />
        <TechStacks />
      </DataProvider>
    </div>
  );
};

export default App;
