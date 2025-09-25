import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="scroll-smooth bg-gradient-to-b from-purple-900 via-pink-900 to-black">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills/>
        <Contact />
      </main>
    </div>
  );
}

export default App;
