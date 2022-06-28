import  './EventItem.css';

function EventSummery(props) {
  if(props.edit === "no"){
    return ( 
      <div className="EventCompSummaryDiv">
        <h3 className="EventCompHeadline">{props.title}</h3>
        <div className='timeCityContent'>
          <h4 className="EventCompDet">{props.city}, {(props.time).slice(0,10)}</h4>
        </div>
        {/*<p className="EventCompIntro">{props.description.slice(0,40)}...</p>*/}
      </div>
    );
  }  
}

export default EventSummery;