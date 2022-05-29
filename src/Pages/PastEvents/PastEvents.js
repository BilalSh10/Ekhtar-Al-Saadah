import "./PastEvents.css";
import OneEvent from "../../OneEvent";

function PastEvents() {
  return (
    <div className="events-body">
      <h2 className="head">Past events</h2>
      <p>-- Here you can view some of the events held in the last week,
          we would apreciate your review on them if you attended --
      </p>
      <div className="events-list">
        <OneEvent className="single-event" />
        <OneEvent className="single-event" />
      </div>
    </div>
  );
}

export default PastEvents;
