import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (

        <nav className="header">
          <Link className="title" to="/">
            <h1>Teatro</h1>
          </Link>
          <ul className="nav-links">   
            <Link className="nav-item event-nav" to="/UpcomingEvents">
              <li className="nav-block">Upcoming events</li>
            </Link>
            <Link className="nav-item pevent-nav" to="/PastEvents">
              <li className="nav-block">Past events</li>
            </Link>
            <Link className="nav-item art-nav" to="/Blog">
              <li className="nav-block">Blog</li>
            </Link>
            <Link className="nav-item about-nav" to="/About">
              <li className="nav-block">About us</li>
            </Link>
            <Link className="nav-item donate-nav" to="/Donate">
              <li className="nav-block">Donate</li>
            </Link>
          </ul>
        </nav>
 
  );
}

export default NavigationBar;