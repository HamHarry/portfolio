import HomePage from "./homePage/HomePage";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrap-container">
          <Navbar />
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
