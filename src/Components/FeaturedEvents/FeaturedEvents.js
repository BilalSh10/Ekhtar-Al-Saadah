import './FeaturedEvents.css';
import EventComp from '../EventComp/EventComp';

function FeaturedEvents() {
  return (
    <div className="FeaturedEventsDiv">
      <h2 className="FeaturedEventsHeadline">Featured Events</h2>
      <div className="FeaturedEventsCont">
        <EventComp className="FeaturedEventChild" />
        <EventComp className="FeaturedEventChild" />
        <EventComp className="FeaturedEventChild" />
      </div>
    </div>
  );
}

export default FeaturedEvents;
