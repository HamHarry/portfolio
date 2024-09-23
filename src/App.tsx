import AboutPage from "./about/AboutPage.tsx";
import ContactPage from "./contact/ContactPage.tsx";
import EducationPage from "./education/EducationPage.tsx";
import Experience from "./experience/ExperiencePage.tsx";
import HomePage from "./homePage/HomePage.tsx";
import Navbar from "./layout/Navbar.tsx";
import SkillPage from "./skill/SkillPage.tsx";

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
        <AboutPage />
      </div>
      <div id="Skills">
        <SkillPage />
      </div>
      <div id="Education">
        <EducationPage />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
