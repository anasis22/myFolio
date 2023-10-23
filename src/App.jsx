import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScrollArrow from "./components/ScrollArrow";
import About from "./components/About";
import Education from "./components/Education";
import MenuBar from "./components/MenuBar";
import { DataProvider } from "../contexts/DataContexts";
import TechStacks from "./components/TechStacks";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="
    bg-black overflow-hidden
    "
      >
        <DataProvider>
          <Navbar />
          <MenuBar />
          <Home />
          <ScrollArrow />
          <About />
          <Education />
          <TechStacks />
          <Projects />
        </DataProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
