import './EventDetailsPage.css'
import TimeButtonItem from '../components/eventsFiles/TimeButtonItem';
import EditButton from '../components/eventsFiles/EditButton';
import React from 'react';
import { useLocation } from 'react-router';

function EventDetailsPage(props) {
  let query = new URLSearchParams(useLocation().search);  
  return (
    <div className="SingleEventCont">
      <h3 className="SingleEventTitle"> {query.get("title")} </h3>
      <img src={query.get("image")} alt={query.get("alt")}  id='SingleEventImg' />    
      <div className="SingleEventDetails">
          <h4 className="EachDetailHeadline">Description:</h4>
          <p className="EachDetailInfo">{query.get("description")}</p>
          <h4 className="EachDetailHeadline">Date & Time:</h4>
          <p className="EachDetailInfo">{query.get("time").replace("T", " , ")}.</p>
          <h4 className="EachDetailHeadline">Place:</h4>
          <p className="EachDetailInfo">{query.get("venue")}, {query.get("city")}</p>
      </div>
      <TimeButtonItem time = {query.get("time")} edit = {query.get("edit")} registrationLink = {query.get("registrationLink")} />
      <EditButton edit={query.get("edit")} id={query.get("id")} collectionName={query.get("collectionName")}/>
    </div>
  );
}

export default EventDetailsPage;