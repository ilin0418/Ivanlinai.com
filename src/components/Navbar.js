import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <nav>
        <ul className="menu">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink className="initials" to="/">IL</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;