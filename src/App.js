import "./App.css";
import Nav from "./Nav";
import About from "./Pages/About/About";
import Shop from "./Shop";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterV4 from "./footerv4";
import Articles from "./Pages/Articles/Articles";
import Events from "./Events";
import PastEvents from "./Pages/PastEvents/PastEvents";
import Donate from "./Pages/Donate/Donate";
import Contact from "./Pages/Contact/Contact";
// import DisplayEvent from "./Pages/DisplayEvent/DisplayEvent";
import DisplayEvent from "./Pages/DisplayEvent/DisplayEvent";
// import Articles from './Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Heroes /> */}
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pastevents" element={<PastEvents />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event" element={<DisplayEvent />} />
          </Routes>
        </div>
        <FooterV4 className='footer' />
      </div>
    </Router>
  );
}

export default App;
