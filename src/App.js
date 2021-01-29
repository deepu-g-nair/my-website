import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <br />
      <br />
    </div>
  );
}

export default App;
