import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [navLinks, setNavLinks] = useState("nav-links");

  const humbergerFunction = (event) => {
    if(navLinks === 'nav-links'){
      event.currentTarget.classList.toggle('hidden-nav');
      setNavLinks('hidden-nav');
    }else{
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
          <li className="nav-block">Events calendar</li>
        </Link>
        <Link className="nav-item art-nav" to="/Blog">
          <li className="nav-block">Repértoire</li>
        </Link>
        <Link className="nav-item pevent-nav" to="/PastEvents">
          <li className="nav-block recent">Events archive</li>
        </Link>
        <Link className="nav-item about-nav" to="/About">
          <li className="nav-block">About us</li>
        </Link>
        <Link className="nav-item donate-nav" to="/Donate">
          <li className="nav-block">Donate</li>
        </Link>   
      </ul>
      <button className='humbergerMenu' onClick={humbergerFunction}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

export default NavigationBar;