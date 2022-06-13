import { useRef } from 'react';
import './GeneralForm.css';

function GeneralForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event){
  	event.preventDefault();
  	const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
  	const enteredDescription = descriptionInputRef.current.value;

  	const message = {
  	  messageType:props.messageType,
      senderName: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
  	  description: enteredDescription
  	};
  }  
    
  return (
    <div className="donate-form">
      <h3 className="donate-head">{props.title}</h3>
      <form  onSubmit={submitHandler}>
 	      <div>
 	        <label className="donate-label" htmlFor= 'name'>Name</label>
 	        <input className="donate-field" type='text' required id='name' ref={nameInputRef}/>
 	      </div>
        <br />
        {/* <br /> */}
        <div>
          <label className="donate-label" htmlFor= 'email'>Email</label>
          <input className="donate-field" type='text' required id='email' ref={emailInputRef}/>
        </div>
        <br />
        {/* <br /> */}
        <div>
          <label className="donate-label" htmlFor= 'phone'>Phone number</label>
          <input className="donate-field" type='number'  id='phone' ref={phoneInputRef}/>
        </div>
        <br />
        {/* <br /> */}
 	      <div>
 	        <label className="donate-label" htmlFor= 'description'>{props.description}</label>
 	        <textarea className="donate-field" id='description' required rows='5' columns='42' ref={descriptionInputRef}></textarea>
 	      </div>
        <br />
        {/* <br /> */}
 	      <div className='donate-btn-holder'>
 	  	    <button className="donate-btn">Send</button>
 	      </div>
 	    </form>
    </div>  
  );
}

export default GeneralForm;