import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './GeneralForm.module.css';

function GeneralForm(props) {
  const form = useRef();

  function submitHandler(event){
    event.preventDefault();
    emailjs.sendForm('service_0jjhack', 'template_svfyjbt', form.current, '9JC3MmJ8gBtEUXEG2')
     .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    event.target.reset();
    alert("your mesage was successfully sent, we will get back to you as soon as possible.");
  }  
    
  return (
    <div className={classes.form}>
      <h3 className={classes.head}>{props.title}</h3>
      <form ref={form} onSubmit={submitHandler}>
        <div>
          <label className={classes.label} htmlFor= 'name'>Name</label>
          <input className={classes.field} type='text' required id='name' name="senderName"/>
        </div>
        <br />
        <div>
          <label className={classes.label} htmlFor= 'email'>Email</label>
          <input className={classes.field} type='text' required id='email' name="email"/>
        </div>
        <br />
        <div>
          <label className={classes.label} htmlFor= 'phone'>Phone number</label>
          <input className={classes.field} type='number'  id='phone' name="phone"/>
        </div>
        <br />
        <div>
          <label className={classes.label} htmlFor= 'description'>{props.description}</label>
          <textarea className={classes.field} id='description' required rows='5' columns='42' name="description"></textarea>
        </div>
        <br />
        <div className={classes.btnHolder}>
          <input className={classes.btn} type="submit" value="Send" />
        </div>
      </form>
    </div>  
  );
}

export default GeneralForm;