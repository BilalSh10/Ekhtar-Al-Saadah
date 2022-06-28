import { useRef, useState } from 'react';
import validator from 'validator';
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { DeleteDocumentFromDB } from '../../components/dbOperations/DeleteDocumentFromDB';
import classes from './CancelSubscription.module.css';

function CancelSubscriptionPage(){
  const [responseMessage, setResponseMessage] = useState("");
  const emailInputRef = useRef();

  async function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    if (validator.isEmail(enteredEmail)) {
      try{
        const collectionRef = collection(db, "subscribers");
        const q = query(collectionRef, where("enteredEmail", "==", enteredEmail));
        const snapshot = await getDocs(q);
        //console.log(snapshot);
        //snapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());});
        if (snapshot.empty) {
          setResponseMessage("The entered email is NOT subscribed to our mailing list!");
        } else {
          setResponseMessage("");
          snapshot.forEach((doc) => {DeleteDocumentFromDB("subscribers", doc.id);});
          setResponseMessage("Your email is no longer subscribed to our mailing list!!");
          event.target.reset();
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
      <h3 id={classes.css}>Remove email from our mailing list:</h3>
      <div className={classes.form0}>
        <form className={classes.form} onSubmit = {submitHandler}>       
          <input className={classes.emailField} type='text' required placeholder='enter your email address here' id='email' ref={emailInputRef}/>
          <button className={classes.emailButton} >Unsubscribe</button>
        </form>
      </div>
      <br/>
      <div id={classes.css}>
       {responseMessage}
      </div>
    </div>
  );
}

export default CancelSubscriptionPage;