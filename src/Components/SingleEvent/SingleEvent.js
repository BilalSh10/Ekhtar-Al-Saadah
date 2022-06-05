import eventImg from '../../Images/activities2.png';
import './SingleEvent.css';


function SingleEventPage() {
  return (
    <div className="SingleEventCont">
      <h3 className="SingleEventTitle">Event Title</h3>
      <img src={eventImg} alt="img" id='SingleEventImg' />
      <div className="SingleEventDetails">
          <h4 className="EachDetailHeadline">Description:</h4>
          <p className="EachDetailInfo">Here goes the description of the event.</p>
          <h4 className="EachDetailHeadline">Date & Time:</h4>
          <p className="EachDetailInfo">Here goes the date and time of the event.</p>
          <h4 className="EachDetailHeadline">Place:</h4>
          <p className="EachDetailInfo">Here goes the place where the event will be held.</p>
      </div>
    </div>
  );
}

export default SingleEventPage;
