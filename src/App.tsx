import About from "./About/About";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";

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
    </div>
  );
}

export default App;
