import  './EventItem.css';

function EventSummery(props) {
  var dateE = (props.time).replace("T", ", ");
  if(props.edit === "no"){ 
    return ( 
      <div className="EventCompSummaryDiv">
        {/* <h4 className="EventCompHeadline">title: {props.title}</h4> */}
        <h3 className="EventCompHeadline">{props.title}</h3>
        {/* <p className="EventCompIntro">description: {props.description}</p> */}
        {/* <h4>time: {props.time}</h4> */}
        <div className='timeCityContent'>
          <h4 className="EventCompDet">{dateE}</h4>
          {/* <h4>city: {props.city}</h4> */}
          <h4 className="EventCompDet">{props.city} city</h4>
          {/* <h4>venue: {props.venue}</h4> */}
        </div>
        
      </div>
    );
  }  
}

export default EventSummery;