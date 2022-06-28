import FlipCard from './FlipCard';
import './FeaturedEvents.css';

function FeaturedEvents(props) {
  return (
    <div>
      <h2>Featured Events</h2>
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