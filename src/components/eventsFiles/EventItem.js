import EditButton from "./EditButton";
import TimeButtonItem from "./TimeButtonItem";
import EventSummery from "./EventSummery";
import ReadMore from "./ReadMore";
import "./EventItem.css";
import { AddDocumentToDB } from "../dbOperations/AddDocumentToDB";
import { DeleteDocumentFromDB } from "../dbOperations/DeleteDocumentFromDB";

function EventItem(props) {
  const currentTime = new Date();
  const eventTime = new Date(props.time);
  if (props.collectionName === "upcoming events" && eventTime < currentTime) {
    //transfer from upcoming events to past events
    const event = {
      title: props.title,
      priority: props.priority,
      description: props.description,
      alt: props.alt,
      city: props.city,
      venue: props.venue,
      category: props.category,
      type: props.type,
      registrationLink: props.registrationLink,
      time: props.time,
      image: props.image,
    };
    AddDocumentToDB("past events", event);
    DeleteDocumentFromDB("upcoming events", props.id);
  }

  return (
    <div className="EventCompCont">
      <div className="EventCompImgDiv">
        <img src={props.image} alt={props.alt} id="eventImg" />
      </div>
      
      <div className="eventContent">
        <EventSummery
          edit={props.edit}
          title={props.title}
          city={props.city}
          description={props.description}
          venue={props.venue}
          time={props.time}
        />
        <EditButton
          edit={props.edit}
          title={props.title}
          priority={props.priority}
          image={props.image}
          alt={props.alt}
          description={props.description}
          venue={props.venue}
          time={props.time}
          id={props.id}
          collectionName={props.collectionName}
          type={props.type}
          category={props.category}
          city={props.city}
          registrationLink={props.registrationLink}
        />
        <TimeButtonItem
          time={props.time}
          id = {props.id}
          edit={props.edit}
          registrationLink={props.registrationLink}
        />
        <ReadMore
          edit={props.edit}
          title={props.title}
          image={props.image}
          alt={props.alt}
          description={props.description}
          venue={props.venue}
          time={props.time}
          id={props.id}
          collectionName={props.collectionName}
          registrationLink={props.registrationLink}
        />
      </div>
      
    </div>
  );
}

export default EventItem;
