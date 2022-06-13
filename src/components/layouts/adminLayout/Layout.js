// import TopBar from './TopBar';
import NavigationBar from './NavigationBar';
import BackToTopButton from './BackToTopButton';
import '../visitorLayout/Layout.css';

function Layout(props) {
  return (
    <div className='AdminLayout'>
      {/* <TopBar /> */}
      <NavigationBar className='AdminNavBar' />
      <main className='AdminBody'>{props.children}</main>
      <BackToTopButton />
      {/* <TopBar className="logOutBtn" /> */}
    </div>
  );
}

export default Layout;