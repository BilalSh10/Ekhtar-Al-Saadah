import { useRef, useState } from 'react';
import { NestedSelects, Select, Option, MakeVisible } from 'nested-selects-react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import emailjs from '@emailjs/browser';
import classes from './AddEventPage.module.css';

function AddEventPage() {
  const [imgToUpload, setImgToUpload] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [ state, setState ] = useState({ nestedSelectsValues: null });
  const getValues = data => setState({ ...state, nestedSelectsValues: data });
  const subscribers = useReadFromDB("subscribers");

  const titleRef = useRef();
  const priorityRef = useRef();
  const descriptionRef = useRef();
  const altRef = useRef();
  const cityRef = useRef();
  const venueRef = useRef();
  const registrationLinkRef = useRef();
  const timeRef = useRef();

  function submitHandler(event){
  	event.preventDefault();
    const enteredEvent = {
      title:titleRef.current.value,
      priority:priorityRef.current.value,
      description:descriptionRef.current.value,
      alt:altRef.current.value,
      city:cityRef.current.value,
      venue:venueRef.current.value,
      type:state.nestedSelectsValues["type"],
      category:state.nestedSelectsValues["category"],
      registrationLink:registrationLinkRef.current.value,
      time:timeRef.current.value,
      image: imgUrl
    };
    if(enteredEvent.type && enteredEvent.category){  
      AddDocumentToDB("upcoming events", enteredEvent);
      alert("New event uploaded!");
    }
    const mailList = (subscribers.map((doc) => doc.enteredEmail)).toString();
    let cityVenue = enteredEvent.venue + " - " + enteredEvent.city;
    let msg = {list: mailList, time:enteredEvent.time.replace("T", " "), regLink:enteredEvent.registrationLink,
              title:enteredEvent.title, description:enteredEvent.description, location:cityVenue};
    //put the secret keys in the send function
    //emailjs.send('', '', msg, '')
    //  .then((result) => {
    //      console.log(result.text);
    //  }, (error) => {
    //      console.log(error.text);
    //  });
    // console.log(mailList); 
  }  

  function alertSuccess(){
    alert("image successfully uploaded");
  }

  function nestedInputs(){
    return(
        <div>
          <br/>
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
          <br/>
        </div>
    );
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
        <h3 className={classes.AddEventHead}>You can add a new event here:</h3>
        <br />
        <div className={classes.control}>
          <label className={classes.label} htmlFor= 'title'>Title</label>
          <input className={classes.input} required type='text' id='title' ref={titleRef}/><p/>
          <label className={classes.label} htmlFor= 'priority'>Priority</label>
          <input className={classes.input} required type='number' id='priority' ref={priorityRef}/><p/>
          <label className={classes.label} htmlFor= 'description'>Description</label>
          <textarea className={classes.textarea} required id='description' placeholder='event content here' rows='6' ref={descriptionRef}></textarea><p/>
          <label className={classes.label} htmlFor= 'alt'>alt(Image description)</label>
          <input className={classes.input} required type='text' id='alt' ref={altRef}/><p/>
          <label className={classes.label} htmlFor= 'city'>Region</label>
          <select className={classes.input} name="city" required ref={cityRef}>
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
          <label className={classes.label} htmlFor= 'venue'>venue</label>
          <input className={classes.input} type='text' required id='venue' ref={venueRef}/>        
          { nestedInputs() }
          <label className={classes.label} htmlFor= 'registrationLink'>registrationLink</label>
          <input className={classes.input} type='text' required id='registrationLink' ref={registrationLinkRef}/>
          <label className={classes.label} htmlFor= 'time'>time</label>
          <input className={classes.input} type='datetime-local' required id='time' ref={timeRef}/>
          <div className={classes.inputImageCont}>
            <label className={classes.label} htmlFor= 'image'>image</label>
            <input className={classes.input} required type="file" onChange={(event) => {setImgToUpload(event.target.files[0]);}}/>
            <button className={classes.addimgbtn} onClick={upload}> Upload Image </button>
          </div>  
          <p/>
        </div >
        <div className={classes.container}>
          <button className={classes.addeventbtn}>Add event</button>
        </div>
      </form> 
    </div>
  );
}

export default AddEventPage;
