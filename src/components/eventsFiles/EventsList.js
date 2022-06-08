import EventItem from './EventItem';
import './EventsList.css';

function EventsList(props) {
  return (
    <div className="AllEventsContainer">
    <h2 className="AllEventsHeadline">Events</h2>
      <div className="AllEventsAsList">
        {props.events.map((event) => (
          <EventItem
            key = {event.id}
            id = {event.id}
            title = {event.title}
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

export default EventsList;