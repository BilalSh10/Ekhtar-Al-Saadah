import { useRef, useState } from "react";
import { useLocation } from 'react-router';
import { NestedSelects, Select, Option, MakeVisible } from 'nested-selects-react';
import { db } from "../../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import "./EditButton.css";

function EditEventPage(props) {
  let query = new URLSearchParams(useLocation().search);
  const document = doc(db, query.get("collectionName"), query.get("id"));
  const [ state, setState ] = useState({ nestedSelectsValues: null });
  const getValues = data => setState({ ...state, nestedSelectsValues: data });

  const titleInputRef = useRef();
  const priorityInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();
  const cityInputRef = useRef();
  const venueInputRef = useRef();
  const registrationLinkInputRef = useRef();

  async function editTitle(newValue) {
    if(titleInputRef.current.value)
      await updateDoc(document, { "title": titleInputRef.current.value });
  }

  async function editPriority(newValue) {
    //console.log(query.get("priority"))
    if(priorityInputRef.current.value)
      await updateDoc(document, { "priority": priorityInputRef.current.value });
  }

  async function editTime(newValue) {
    if(timeInputRef.current.value)  
      await updateDoc(document, { "time": timeInputRef.current.value });
  }

  async function editDescrption(newValue) {
    if(descriptionInputRef.current.value)
      await updateDoc(document, {"description": descriptionInputRef.current.value});
  }

  async function editCity(newValue) {
    if(cityInputRef.current.value )  
      await updateDoc(document, { "city": cityInputRef.current.value });
  }

  async function editVenue(newValue) {
    if(venueInputRef.current.value)  
      await updateDoc(document, { "venue": venueInputRef.current.value });
  }

  async function editTypeCategory(newValue) {
    if(state.nestedSelectsValues["type"] && state.nestedSelectsValues["category"])
      await updateDoc(document, { "type": state.nestedSelectsValues["type"] });
      await updateDoc(document, { "category": state.nestedSelectsValues["category"] });
  }

  async function editRegistrationLink(newValue) {
    if(registrationLinkInputRef.current.value)  
      await updateDoc(document, {"registrationLink": registrationLinkInputRef.current.value });
  }

  function nestedInputs(){
    return(
        <div>
          <br/>
          <h4 className="PreviousDetails">Type: {query.get("type")},  Category: {query.get("category")}</h4>
          <NestedSelects getvalues={getValues}>
            <Select name="type" label="Type">
              <Option value="workshop" label="Workshop">Workshop
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="painting">Painting</Option>
                    <Option value="sound engineering">Sound engineering</Option>
                    <Option value="sculpturing">Sculpturing</Option>
                    <Option value="acting">acting</Option>
                    <Option value="improptu acting">Improptu acting</Option>
                    <Option value="photography">Photography</Option>
                    <Option value="meeting with artist">Meeting with artist</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible> 
              </Option>
              <Option value="play" label="Play">Play
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Al-Khurafah">Al-Khurafah</Option>
                    <Option value="Shareef">Shareef</Option>
                    <Option value="Al-Karar">Al-Karar</Option>
                    <Option value="Aswat">Aswat</Option>
                    <Option value="Ghurfat Al-Asrar">Ghurfat Al-Asrar</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible>
              </Option>  
              <Option value="display" label="Display">Display
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Art exhibition">Art exhibition</Option>
                    <Option value="Musical display">Musical display</Option>
                    <Option value="Dancing display">Dancing display</Option>
                    <Option value="Festival">Festival</Option>
                    <Option value="literary colloquy">literary colloquy</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible> 
              </Option>  
            </Select>
          </NestedSelects>
          <button className="NewEventDetailsBtn" onClick={() => {editTypeCategory();}}>
                Edit
          </button>
          <br/>
        </div>
    );
  }

    return (
        <div>
          <p/><p/>
          <div>
            <h4 className="PreviousDetails">Title: {query.get("title")}</h4>
            <div className="InputAndBtnCont">
              <input className="NewEventDetailsInput" type="text" ref={titleInputRef}/>
              <button className="NewEventDetailsBtn" onClick={() => {editTitle();}}>
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Priority: {query.get("priority")}</h4>
            <div className="InputAndBtnCont">
              <input className="NewEventDetailsInput" type="number" ref={priorityInputRef} />
              <button className="NewEventDetailsBtn" onClick={() => {editPriority();}}>
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Time: {query.get("time")}</h4>
            <div className="InputAndBtnCont">
              <input className="NewEventDetailsInput" type="datetime-local" ref={timeInputRef} />
              <button className="NewEventDetailsBtn" onClick={() => {editTime();}}>
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">City: {query.get("city")}</h4>
            <div className="InputAndBtnCont">
              <select className="NewEventDetailsInput" name="city" required ref={cityInputRef}>
                <option value="other" label="other">other</option>
                <option value="Jerusalem" label="Jerusalem">Jerusalem</option>
                <option value="Nazereth" label="Nazereth">Nazereth</option>
                <option value="Haifa" label="Haifa">Haifa</option>
                <option value="Triangle" label="Triangle">Triangle</option>
                <option value="North" label="North">North</option>
                <option value="Center" label="Center">Center</option>
                <option value="South Naqab" label="South Naqab">South Naqab</option>
                <option value="Tel-Aviv" label="Tel-Aviv">Tel-Aviv</option>              
              </select>
              <button className="NewEventDetailsBtn" onClick={() => {editCity();}} >
                Edit
              </button>
            </div>
          </div>
          <div>
            <h4 className="PreviousDetails">Venue: {query.get("venue")}</h4>
            <div className="InputAndBtnCont">
              <input className="NewEventDetailsInput" type="text" ref={venueInputRef}/>
              <button className="NewEventDetailsBtn" onClick={() => {editVenue();}}>
                Edit
              </button>
            </div>
          </div>     
          <div>
            { nestedInputs() }
          </div>
          <div>
            <h4 className="PreviousDetails">Registration link: {query.get("registrationLink")}</h4>
            <div className="InputAndBtnCont">
              <input className="NewEventDetailsInput" type="text" ref={registrationLinkInputRef}/>
              <button className="NewEventDetailsBtn" onClick={() => {editRegistrationLink();}}>
                Edit
              </button>
            </div>
          </div>
          <div>
            <p className="PreviousDetails">Description: {query.get("description")}</p>
            <div className="InputAndBtnCont">
              <textarea rows="7" ref={descriptionInputRef} />
              <button className="NewEventDetailsBtn" onClick={() => {editDescrption();}}>
                Edit
              </button>
            </div>
          </div>
          <p/><p/>
        </div>
    );
}

export default EditEventPage;