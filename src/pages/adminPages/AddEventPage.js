import { useRef, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';

import classes from './AddEventPage.module.css';

function AddEventPage() {
  const [imgToUpload, setImgToUpload] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const altRef = useRef();
  const cityRef = useRef();
  const venueRef = useRef();
  const typeRef = useRef();
  const categoryRef = useRef();
  const timeRef = useRef();

  function submitHandler(event){
  	event.preventDefault();
    const enteredEvent = {
      title:titleRef.current.value,
      description:descriptionRef.current.value,
      alt:altRef.current.value,
      city:cityRef.current.value,
      venue:venueRef.current.value,
      category:categoryRef.current.value,
      type:typeRef.current.value,
      time:timeRef.current.value,
      image: imgUrl
    };
    AddDocumentToDB("upcoming events", enteredEvent);
  }

  function alertSuccess(){
    alert("image successfully uploaded");
  }

  const upload = (event) => {
    event.preventDefault();
    if (imgToUpload == null) return;
    const imageRef = ref(storage, `images/${imgToUpload.name + v4()}`);    
    uploadBytes(imageRef, imgToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {setImgUrl(url);}).then(alertSuccess());
    });
  };

  return (
    <div className= {classes.card}>
      <form className={classes.form} onSubmit={submitHandler} >
        <h3>You can add a new event here:</h3><p/><p/>
        <div className={classes.control}>
          <label htmlFor= 'title'>Title</label>
          <input required type='text' id='title' ref={titleRef}/><p/>
          <label htmlFor= 'description'>Description</label>
          <textarea required id='description' placeholder='event content here' rows='10' ref={descriptionRef}></textarea><p/>
          <label htmlFor= 'alt'>alt(Image description)</label>
          <input required type='text' id='alt' ref={altRef}/><p/>  
          <label htmlFor= 'city'>city</label>
          <input type='text' required id='city' ref={cityRef}/>
          <label htmlFor= 'venue'>venue</label>
          <input type='text' required id='venue' ref={venueRef}/>
          <label htmlFor= 'type'>type</label>
          <input type='text' required id='type' ref={typeRef}/>
          <label htmlFor= 'category'>category</label>
          <input type='text' required id='category' ref={categoryRef}/>
          <label htmlFor= 'time'>time</label>
          <input type='datetime-local' required id='time' ref={timeRef}/>
          <div>
            <label htmlFor= 'image'>image</label>
            <input required type="file" id='image' onChange={(event) => {setImgToUpload(event.target.files[0]);}}/>
            <button onClick={upload}> Upload Image </button>
          </div>  
          <p/>
        </div>
        <div>
        <button>Add event</button>
        </div>
      </form> 
    </div>
  );
}

export default AddEventPage;