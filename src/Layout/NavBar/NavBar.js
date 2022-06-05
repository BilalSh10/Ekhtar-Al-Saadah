import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {

  return (
    <nav className="header">
      <Link className="title" to="/">
        <h1>Teatro</h1>
      </Link>
      <ul className="nav-links">
        <Link className="nav-item event-nav" to="/Events">
          <li className="nav-block">Events</li>
        </Link>
        <Link className="nav-item pevent-nav" to="/RecntEvents">
          <li className="nav-block">Recent Events</li>
        </Link>
        <Link className="nav-item art-nav" to="/Blog">
          <li className="nav-block">Blog</li>
        </Link>
        <Link className="nav-item about-nav" to="/About">
          <li className="nav-block">About</li>
        </Link>
        <Link className="nav-item donate-nav" to="/Donate">
          <li className="nav-block">Donate</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
