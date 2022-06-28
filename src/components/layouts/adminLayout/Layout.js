import NavigationBar from './NavigationBar';
import BackToTopButton from '../BackToTopButton';
import LogoutBar from './LogoutBar';
import classes from'./Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.AdminLayout}>
      <NavigationBar className={classes.AdminNavBar} />
      <main className={classes.AdminBody}>
        {props.children}
      </main>
      <BackToTopButton />
      <LogoutBar className={classes.logOutBtn} />
    </div>
  );
}

export default Layout;