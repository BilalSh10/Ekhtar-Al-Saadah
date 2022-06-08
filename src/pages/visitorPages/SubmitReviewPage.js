import { useRef } from 'react';
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';

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
  }

	return (
  	<div>
  	  <form onSubmit = {submitHandler}>
        <h3>You are welcome to write a review of our organization</h3><p/>
  	    <div>
          <label htmlFor= 'name'>Name</label>
          <input type='text' required id='name' ref={nameRef}/>
          <label htmlFor= 'score'>Score</label>
          <input type='number' required id='score' ref={scoreRef}/>
           <label htmlFor= 'description'>description</label>
          <textarea id='description' required placeholder='write your review here' rows='7' ref={descriptionRef}></textarea>
        </div>
        <div>
 	        <button>Submit Review</button>
 	      </div>
  	 </form>  
    </div>
  );
}

export default SubmitReviewPage;