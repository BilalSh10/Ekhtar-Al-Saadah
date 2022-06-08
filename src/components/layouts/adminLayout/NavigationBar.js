import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';

function NavigationBar() {
  return (
  	  <header className = {classes.header}>
        <nav>
          <ul>
            <li>
              <Link to='/AdminHome'>Admin Homepage</Link>
            </li>  
            <li>
              <Link to='/EditAssociationInfo'>Edit info</Link>
            </li>
            <li>
              <Link to='/EditArticles'>edit articles</Link>
            </li>
            <li>
              <Link to='/EditReviews'>edit reviews</Link>
            </li>
            <li>
              <Link to='/EditUpcomingEvents'>edit upcoming events</Link>
            </li>
            <li>
              <Link to='/EditPastEvents'>edit past events</Link>
            </li>
            <li>
              <Link to='/AddEvent'>add event</Link>
            </li>
            <li>
              <Link to='/AddArticle'>add article</Link>
            </li>
          </ul>
        </nav>
      </header>  
  );
}

export default NavigationBar;