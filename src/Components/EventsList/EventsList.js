import EventComp from '../EventComp/EventComp';
import './EventsList.css';

function EventsList(props) {
  return (
    <ul className="{classes.list}">
      {props.events.map((event) => (
        <EventComp
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
        />  
        ))}
    </ul>
  );
}

export default EventsList;