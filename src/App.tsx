import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";
import Volunteering from "./components/Volunteering/Volunteering";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Element name="about" className="section">
          <About />
        </Element>
        <Element name="projects" className="section">
          <Projects />
        </Element>
        <Element name="volunteering" className="section">
          <Volunteering />
        </Element>
        <Element name="contact" className="section">
          <Contacts />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
