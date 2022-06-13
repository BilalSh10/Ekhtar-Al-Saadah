import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { db } from "../../firebase-config";
import {addDoc, collection} from "firebase/firestore";

function EvaluationFormPage(props) {
  const form = useRef();
  let {id} = useParams();

  const priceRef = useRef();
  const arrivalRef = useRef();
  const timingRef = useRef();
  const findMethodRef = useRef();
  const notesRef = useRef();

  function submitHandler(event){
  	event.preventDefault();
    const enteredEv = {
      priceQues:priceRef.current.value,
      arrivalQues:arrivalRef.current.value,
      timingQues:timingRef.current.value,
      findMethodQues:findMethodRef.current.value,
      notes:notesRef.current.value,
    };
    const generalRef = collection(db, `past events/${id}/general`);
    const general = addDoc(generalRef, enteredEv);
    alert("Your evaluation was received, We thank you for your time!");
    event.target.reset();
  }  
    
  return (
    <div >
      <h2>Evaluation form: </h2>
      <form ref={form} onSubmit={submitHandler}>
        <label>
          Was the price of the ticket suitable?
          <select ref={priceRef}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>  
        <label>
          Was the arrival to the venue easy?
          <select ref={arrivalRef}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>  
        <label>
          Was the day and time of the event suitable?
          <select ref={timingRef}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>  
        <label>
         How did you find out about the event?
          <select ref={findMethodRef}>
            <option value="fb">Facebook</option>
            <option value="insta">Instagram</option>
            <option value="friend">friend</option>
          </select>
        </label> 

 	      <div>
 	        <label htmlFor= 'Notes'> Notes </label>
 	        <textarea id='Notes' required rows='5' columns='42' ref={notesRef}></textarea>
 	      </div>
 	      <div>
          <button>Submit Review</button>
 	      </div>
 	    </form>
    </div>  
  );
}

export default EvaluationFormPage;