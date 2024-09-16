import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="container-navbar">
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="Home" smooth={true} duration={200}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={200}>
            About
          </Link>
        </li>
        <li>Skills</li>
        <li>Education</li>
        <li>Experience</li>
      </ul>
    </div>
  );
};

export default Navbar;
