import TopBar from './TopBar';
import NavigationBar from './NavigationBar';
import BackToTopButton from './BackToTopButton';
import '../visitorLayout/Layout.css';

function Layout(props) {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <main>{props.children}</main>
      <BackToTopButton />
    </div>
  );
}

export default Layout;