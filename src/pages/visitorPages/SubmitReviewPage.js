import { useRef } from 'react';
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';
import './SubmitReview.css';

function SubmitReviewPage(){
  const nameRef = useRef();
  const scoreRef = useRef();
  const descriptionRef = useRef();

	function submitHandler(event){
  	event.preventDefault();
    const enteredReview = {
      name:nameRef.current.value,
      score:Number(scoreRef.current.value),
      description:descriptionRef.current.value
    };
    AddDocumentToDB("reviews", enteredReview);
    event.target.reset();
    alert("Your review was successfully submitted!");
  }

	return (
  	<div>
  	  <form className='SubmitReviewPage' onSubmit = {submitHandler}>
        <h3 className='SubmitReviewPageHeader'>You are welcome to write a review of our organization</h3><p/>
  	    <div className='SubmitReviewForm'>
          <label className='SubmitReviewLabel' htmlFor= 'name'>Name</label>
          <input className='SubmitReviewInput' type='text' required id='name' ref={nameRef}/>
          <label className='SubmitReviewLabel' htmlFor= 'score'>Score</label>
          <input className='SubmitReviewInput' type='number' required id='score' ref={scoreRef}/>
           <label className='SubmitReviewLabel' htmlFor= 'description'>description</label>
          <textarea className='SubmitReviewInput' id='description' required placeholder='write your review here' rows='7' ref={descriptionRef}></textarea>
        </div>
        <div className='SubmitReviewBtnHolder'>
 	        <button className='SubmitReviewBtn'>Submit</button>
 	      </div>
  	 </form>  
    </div>
  );
}

export default SubmitReviewPage;