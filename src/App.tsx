import About from "./About/About";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import Skills from "./Skills/Skills";

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
