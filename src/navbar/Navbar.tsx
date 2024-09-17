import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="container-navbar">
      <div className="portfolio">
        <Link
          to="Home"
          smooth={true}
          duration={200}
          onClick={() => {
            setSelected("");
          }}
        >
          Portfolio
        </Link>
      </div>
      <ul>
        <li>
          <Link to="About" smooth={true} duration={200}>
            <div
              className={selected === "about" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </div>
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={200}>
            <div
              className={selected === "skills" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("skills");
              }}
            >
              Skills
            </div>
          </Link>
        </li>
        <li>Education</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
