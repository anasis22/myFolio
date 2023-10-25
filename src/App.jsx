import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScrollArrow from "./components/ScrollArrow";
import About from "./components/About";
import Education from "./components/Education";
import MenuBar from "./components/MenuBar";
import { DataProvider } from "../contexts/DataContexts";
import TechStacks from "./components/TechStacks";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
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
          <ContactForm />
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
};

export default App;
