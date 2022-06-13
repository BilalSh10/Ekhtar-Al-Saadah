import NavigationBar from './NavigationBar';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import './Layout.css';

function Layout(props) {
  return (
    <div className="layoutVisitor">
      <NavigationBar className="navbarHome" />
      <main className="theBodyOfHome">{props.children}</main>
      <Footer className="sitefooterHome" />
      <BackToTopButton />
    </div>
  );
}

export default Layout;