import './App.css';
import NavBar from './Layout/NavBar/NavBar';
import Footer from './Layout/Footer/Footer';
import BackToTopButton from './Components/BackToTopButton/BackToTopButton';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import ArticlePage from './Pages/ArticlePage/ArticlePage';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Donate from './Pages/Donate/Donate';
import EventPage from './Pages/EventPage/EventPage';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import RecentEvents from './Pages/RecentEvents/RecentEvents';
import Reviews from './Pages/Reviews/Reviews';
import SubmitReview from './Pages/SubmitReview/SubmitReview';
import VisitorFeedback from './Pages/VisitorFeedback/VisitorFeedback';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar className="navbar" />
        <div className="body">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/RecentEvents" element={<RecentEvents />} />
            <Route path="/Donate" element={<Donate />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/EventPage" element={<EventPage />} />
            <Route path="/ArticlePage" element={<ArticlePage />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/SubmitReview" element={<SubmitReview />} />
            <Route path="/VisitorFeedback" element={<VisitorFeedback />} />
          </Routes>
        </div>
        <Footer className='sitefooter' />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
