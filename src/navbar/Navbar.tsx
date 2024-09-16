import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="portfolio">
        <Link to="Home" smooth={true} duration={200}>
          Portfolio
        </Link>
      </div>
      <ul>
        <li>
          <Link to="About" smooth={true} duration={200}>
            About
          </Link>
        </li>
        <li>Skills</li>
        <li>Education</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
