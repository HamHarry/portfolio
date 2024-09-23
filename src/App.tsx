/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import About from "./about/About.tsx";
import Contact from "./contact/Contact.tsx";
import Education from "./education/Education.tsx";
import Experience from "./experience/Experience.tsx";
import HomePage from "./homePage/HomePage.tsx";
import Navbar from "./navbar/Navbar.tsx";
import Skills from "./skills/Skills.tsx";

function App() {
  return (
    <div className="background-color">
      <div className="container" id="Home">
        <div className="wrap-container">
          <Navbar />
          <HomePage />
        </div>
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
