import { useRef, useState } from 'react';
import validator from 'validator';
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { AddDocumentToDB } from '../../components/dbOperations/AddDocumentToDB';
import classes from './Subscribe.module.css';

function Subsribe(){
	const [responseMessage, setResponseMessage] = useState("");
  const emailInputRef = useRef();

	async function submitHandler(event){
  	event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    if (validator.isEmail(enteredEmail)) {
      //event.target.reset();
      try{
        const collectionRef = collection(db, "subscribers");
        const q = query(collectionRef, where("enteredEmail", "==", enteredEmail));
        const snapshot = await getDocs(q);
        //console.log(snapshot);
        //snapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());});
        if (snapshot.empty) {
          setResponseMessage("");
          AddDocumentToDB("subscribers", {enteredEmail});
          setResponseMessage("You have successfully joined our mailing list!");
        } else {
          setResponseMessage("Your email is already is our mailing list!");
        }
      }catch(e){
        setResponseMessage("Error: " + e.message);
      }
    }else{
      setResponseMessage("This is NOT a valid email address!");
    }
  }

	return (
  	<div>
      <h6 id={classes.css}>SUBSCRIBE TO OUR MAILING LIST</h6>
      <div className={classes.form0}>
        <form className={classes.form} onSubmit = {submitHandler}>       
          <input className={classes.emailField} type='text' required placeholder='enter your email address here' id='email' ref={emailInputRef}/>
 	        <button className={classes.emailButton} >Submit</button>
  	    </form>
      </div>
      <div id={classes.css}>
       {responseMessage}
      </div>
    </div>
  );
}

export default Subsribe;