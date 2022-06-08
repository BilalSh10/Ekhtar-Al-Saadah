import { useRef, useState } from 'react';
import validator from 'validator';
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';
import './Subscribe.css';

function Subsribe(){
	const [invalidEmailMessage, setInvalidEmailMessage] = useState("");
    const emailInputRef = useRef();

	function submitHandler(event){
  	event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    if (validator.isEmail(enteredEmail)) {
      AddDocumentToDB("subscribers", {enteredEmail});
      setInvalidEmailMessage("");
    } else {
      setInvalidEmailMessage('This is an invalid email!');
    }
  }

	return (
  	<div id = "subscribe-css">
      <h6 className="footerh6">SUBSCRIBE TO OUR MAILING list</h6>
  	  <div className="subscribe-wrapper">
        <div className="subscribe-form">
          <form onSubmit = {submitHandler}>       
  	        <div className='subscribe'>
              <input className="subscribe-css-email-field" type='text' required placeholder='enter your email' id='email' ref={emailInputRef}/>
              <button className="subscribe-css-email-button">Submit</button>
            </div>
            {/* <div className='subscribeBtn'>
 	            <button className="subscribe-css-email-button">Submit</button>
 	          </div> */}
  	      </form>
        </div>
      </div>    

     <div>
       {invalidEmailMessage}
     </div>
    </div>
  );
}

export default Subsribe;