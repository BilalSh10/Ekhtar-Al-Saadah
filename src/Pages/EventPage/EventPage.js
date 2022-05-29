import "./EventPage.css";
import eventImg from '../../Images/activities2.png';

function EventPage() {
  return (
    <div className="event-body">
      <h3 className="event-title">Event Title</h3>
      <img src={eventImg} alt="img" id='event-img' />
      <div className="event-info">
          <h4 className="event-description">Description:</h4>
          <p className="description-info">Here goes the description of the event.</p>
          <h4 className="date-and-time">Date & Time:</h4>
          <p className="date-and-time-info">Here goes the date and time of the event.</p>
          <h4 className="event-place">Place:</h4>
          <p className="place-info">Here goes the place where the event will be held.</p>
      </div>
    </div>
  );
}

export default EventPage;
