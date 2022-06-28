import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./NavigationBar.module.css";
import { useState } from 'react';

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
        <Link className={`${classes.navItem0}, ${classes.NewEventNav}`} to="/AddEvent">
          <li className="nav-block recent">New Event</li>
        </Link>
        <Link className={`${classes.navItem0}, ${classes.NewArticleNav}`} to="/AddArticle" >
          <li className="nav-block recent">New article</li>
        </Link>
        <Link className={`${classes.navItem0}, ${classes.EditEventsNav}`} to="/EditUpcomingEvents">
          <li className="nav-block recent">Edit upcoming events</li>
        </Link>
        <Link className={`${classes.navItem0}, ${classes.EditArticlesNav}`}to="/EditArticles">
          <li className="nav-block recent">Edit articles</li>
        </Link>
        <Link className={`${classes.navItem0}, ${classes.EditArticlesNav}`}to="/EditReviews">
          <li className="nav-block recent">Edit reviews</li>
        </Link>
        <Link className={`${classes.navItem0}, ${classes.EditREventNav}`} to="/EditPastEvents" >
          <li className="nav-block recent">Events Archive</li>
        </Link>
      </ul>
      <button className='humbergerMenu' onClick={humbergerFunction}>
        <GiHamburgerMenu />
      </button>
    </nav> 
  );
}

export default NavigationBar;