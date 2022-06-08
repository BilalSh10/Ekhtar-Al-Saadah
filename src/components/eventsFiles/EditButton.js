import { useRef } from 'react';
import {DeleteDocumentFromDB} from '../dbOperations/DeleteDocumentFromDB';
import { db } from "../../firebase-config";
import {updateDoc,doc} from "firebase/firestore";

function EditButton(props) {
  const document = doc(db, props.collectionName, props.id);

  const titleInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();
  const cityInputRef = useRef();
  const venueInputRef = useRef();
  const typeInputRef = useRef();
  const categoryInputRef = useRef();
  const registrationLinkInputRef = useRef();


  function deleteHandler(){
    DeleteDocumentFromDB(props.collectionName, props.id);
  }

  async function editTitle(newValue){ 
    await updateDoc(document, {"title":titleInputRef.current.value});
  }

  async function editTime(newValue){  
    await updateDoc(document, {"time":timeInputRef.current.value});
  }

  async function editDescrption(newValue){
    await updateDoc(document, {"description":descriptionInputRef.current.value});
  }

  async function editCity(newValue){ 
    await updateDoc(document, {"city":cityInputRef.current.value});
  }

  async function editVenue(newValue){ 
    await updateDoc(document, {"venue":venueInputRef.current.value});
  }

  async function editType(newValue){ 
    await updateDoc(document, {"type":typeInputRef.current.value});
  }

  async function editCategory(newValue){ 
    await updateDoc(document, {"category":categoryInputRef.current.value});
  }

  async function editRegistrationLink(newValue){ 
    await updateDoc(document, {"registrationLink":registrationLinkInputRef.current.value});
  }
  
  if(props.edit === "yes"){
    return (
    <div>  
      <div>  
        <button onClick = {deleteHandler}>delete event</button>
      </div>
      <div>
        <div>
          <label htmlFor= 'title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
          <button onClick = {() => {editTitle();}}>edit title</button>
        </div>  
        <div>
          <label htmlFor= 'time'>Time</label>
          <input type='datetime-local' required id='time' ref={timeInputRef}/>
          <button onClick = {() => {editTime();}}>edit time</button>
        </div>  
        <div>
          <label htmlFor= 'description'>Description</label>
          <input type='text' required id='description' ref={descriptionInputRef}/>
          <button onClick = {() => {editDescrption();}}>edit description</button>
        </div> 
        <div>
          <label htmlFor= 'city'>City</label>
          <input type='text' required id='city' ref={cityInputRef}/>
          <button onClick = {() => {editCity();}}>edit city</button>
        </div>
        <div>
          <label htmlFor= 'venue'>Venue</label>
          <input type='text' required id='venue' ref={venueInputRef}/>
          <button onClick = {() => {editVenue();}}>edit venue</button>
        </div> 
        <div>
          <label htmlFor= 'type'>Type</label>
          <input type='text' required id='Type' ref={typeInputRef}/>
          <button onClick = {() => {editType();}}>edit type</button>
        </div> 
        <div>
          <label htmlFor= 'category'>Category</label>
          <input type='text' required id='category' ref={categoryInputRef}/>
          <button onClick = {() => {editCategory();}}>edit category</button>
        </div> 
        <div>
          <label htmlFor= 'registrationLink'>Registration link</label>
          <input type='text' required id='registrationLink' ref={registrationLinkInputRef}/>
          <button onClick = {() => {editRegistrationLink();}}>edit registration link</button>
        </div> 
      </div>
    </div>  
    );
  }
}

export default EditButton;