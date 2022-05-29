import './OneEvent.css';
import EventImg from './Images/activities3.jpg';
// import EventPage from './EventPage';
import { BsChevronDoubleRight } from "react-icons/bs";


function OneEvent() {
  return (
    <div class="event-comp">
      <div className='event-img'>
            <img src={EventImg} id='eventImg' />
        </div>
        <div className='event-summary'>
            <h4 className='headline'>This is the headline</h4>
            <p className='blog-intro'>Here we can have a short intro of the event, such
            as the time and date of the event, 1-line general summary, where it's going
            to be held. this is a paragraph.</p>
            <div className='cont'>
              <a href='/EventPaage'>continue reading&nbsp;<BsChevronDoubleRight id='icon' /></a>
              {/* <link to={"./EventPage"}>
                <li>Continue reading</li>
              </link> */}
            </div>
        </div>
        
    </div>
  );
}

export default OneEvent;
