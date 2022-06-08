import { Link } from 'react-router-dom';
import classes from './TopBar.module.css';

function TopBar() {
  return (
  	<div>
  	  <div>
  	    <Link to='/Login'>login</Link>
  	  </div>
  	  <div>
  	    logo
  	  </div>
  	  <div>
  	    languages
  	  </div>
  	</div>
  );
}

export default TopBar;