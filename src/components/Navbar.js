import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <nav>
        <ul className="menu">
          <li><NavLink tag={Link} to="/about">About</NavLink></li>
          <li><NavLink tag={Link} to="/education">Education</NavLink></li> {/* Changed from Contact to Education */}
          <li><NavLink tag={Link} className="initials" to="/">IL</NavLink></li>
          <li><NavLink tag={Link} to="/experience">Experience</NavLink></li>
          <li><NavLink tag={Link} to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;