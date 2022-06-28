import ReadMore from "../eventsFiles/ReadMore";
import "./FlipCard.css";

function FlipCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.image} alt={props.alt} id="image" />
        </div>
        <div className="flip-card-back">
          <h1>{props.title}</h1>
          <p>{props.type}</p>
          <p>{(props.time).replace("T", " ").replace("-","/").replace("-","/")}</p>
          <p>{props.venue}, {props.city}</p>
          <br/>
          <ReadMore
            edit={props.edit}
            title={props.title}
            image={props.image}
            alt={props.alt}
            description={props.description}
            venue={props.venue}
            city={props.city}
            time={props.time}
            id={props.id}
            collectionName={props.collectionName}
            registrationLink={props.registrationLink}
          />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;