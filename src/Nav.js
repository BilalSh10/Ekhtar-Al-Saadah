import "./App.css";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {

  return (
    <nav className="header">
      <Link className="title" to="/">
        <h1>Ekhtar Al Sa'adah</h1>
      </Link>
      <ul className="nav-links">
        <Link className="nav-item home-nav" to="/">
          <li className="nav-block">Home</li>
        </Link>
        <Link className="nav-item event-nav" to="/Events">
          <li className="nav-block">Events</li>
        </Link>
        <Link className="nav-item pevent-nav" to="/PastEvents">
          <li className="nav-block">Past Events</li>
        </Link>
        <Link className="nav-item art-nav" to="/Articles">
          <li className="nav-block">Articles</li>
        </Link>
        <Link className="nav-item about-nav" to="/About">
          <li className="nav-block">About</li>
        </Link>
        <Link className="nav-item donate-nav" to="/Donate">
          <li className="nav-block">Donate</li>
        </Link>
        <Link className="nav-item contact-nav" to="/contact">
          <li className="nav-block">Contact Us</li>
        </Link>
        <Link className="nav-item contact-nav" to="/event">
          <li className="nav-block">Example</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
