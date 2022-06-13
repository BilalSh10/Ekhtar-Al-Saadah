import './FeaturedEvents.css';
// import EventComp from '../EventComp/EventComp';
import FlipCard from '../FlipCard/FlipCard';
// import Swiperv4 from '../SwiperComp/Swiper';

function FeaturedEvents(props) {
  return (
    <div className="FeaturedEventsDiv">
      <h2 className="FeaturedEventsHeadline">Featured Events</h2>
      <div className="FeaturedEventsCont">
       {props.events.map((event) => (
          <FlipCard
            key = {event.id}
            id = {event.id}
            title = {event.title}
            priority = {event.priority}
            description = {event.description}
            time = {event.time}
            city = {event.city}
            venue = {event.venue}
            type = {event.type}
            category = {event.category}
            image = {event.image}
            alt = {event.alt}
            registrationLink = {event.registrationLink}
            edit = {props.edit}
            collectionName = {props.collectionName}
            className="OneEvent"
          />  
          ))}
      </div>
    </div>
  );
}

export default FeaturedEvents;
