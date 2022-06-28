import NavigationBar from './NavigationBar';
import Footer from './Footer';
import BackToTopButton from '../BackToTopButton';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.layoutVisitor}>
      <NavigationBar className={classes.navbarHome} />
      <main className={classes.theBodyOfHome}>{props.children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default Layout;