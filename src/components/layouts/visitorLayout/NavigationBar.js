import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'


function NavigationBar() {

  const [navLinks, setNavLinks] = useState("nav-links");
  // const [icon, setIcon] = useState('GiHamburgerMenu');

  const humbergerFunction = (event) => {

    if(navLinks === 'nav-links'){
      event.currentTarget.classList.toggle('hidden-nav');
      setNavLinks('hidden-nav');
    }
    else{
      // setIcon({AiOutlineClose});
      setNavLinks('nav-links');
    }
    
  };

  return (
        <nav className="header">
          <Link className="title" to="/">
            <h1>TEATRO</h1>
          </Link>
          <ul className={navLinks}>   
            <Link className="nav-item event-nav" to="/UpcomingEvents">
              <li className="nav-block">Events</li>
            </Link>
            <Link className="nav-item pevent-nav" to="/PastEvents">
              <li className="nav-block recent">Recent <span className='ev'>Events</span></li>
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

          <button className='humbergerMenu' onClick={humbergerFunction}>
                <GiHamburgerMenu />
          </button>

          {/* <ul className="hidden-nav">   
            <Link className="nav-item2 event-nav2" to="/UpcomingEvents">
              <li className="nav-block2">Upcoming events</li>
            </Link>
            <Link className="nav-item2 pevent-nav2" to="/PastEvents">
              <li className="nav-block2">Past events</li>
            </Link>
            <Link className="nav-item2 art-nav2" to="/Blog">
              <li className="nav-block2">Blog</li>
            </Link>
            <Link className="nav-item2 about-nav2" to="/About">
              <li className="nav-block2">About us</li>
            </Link>
            <Link className="nav-item2 donate-nav2" to="/Donate">
              <li className="nav-block2">Donate</li>
            </Link>

          </ul> */}
        </nav>
 
  );
}

export default NavigationBar;
