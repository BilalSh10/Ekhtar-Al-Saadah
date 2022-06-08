import TimeButtonItem from './TimeButtonItem';
import EditButton from './EditButton';
import  './EventItem.css';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function EventItem(props) {
    return (
    <div className="EventCompCont">
      <div className="EventCompImgDiv">
        <img src = {props.image} alt = {props.alt} id="eventImg"/>
      </div>
      <div className="EventCompSummaryDiv">
        <h4 className="EventCompHeadline">title: {props.title}</h4>
        <p className="EventCompIntro">description: {props.description}</p>
        <h3>time: {props.time}</h3>
        <h3>city: {props.city}</h3>
        <h3>venue: {props.venue}</h3>
        <h3>type: {props.type}</h3>
        <h3>category: {props.category}</h3>
        <TimeButtonItem time = {props.time} />
      </div>   
     <EditButton edit = {props.edit} id = {props.id} collectionName = {props.collectionName}/>
    </div>
  );
}

export default EventItem;