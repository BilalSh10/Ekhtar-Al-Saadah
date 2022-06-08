import NavigationBar from './NavigationBar';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import './Layout.css';

function Layout(props) {
  return (
    <div className="App">
      <NavigationBar className="navbar" />
      <main className="body">{props.children}</main>
      <Footer className="sitefooter" />
      <BackToTopButton />
    </div>
  );
}

export default Layout;