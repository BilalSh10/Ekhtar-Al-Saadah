import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading/Loading';
import { useParams } from 'react-router';

function AttendeesFeedbackPage(props) {
  let {id} = useParams();
  const arr = useReadFromDB(`past events/${id}/attendees feedback`);
  let arrivalQues = [];
  let timingQues = [];
  let priceQues = [];
  let findMethodQues = [];
  let notes = [];
  
  if(arr){
    if(arr.length>0){
      arrivalQues = arr.map((feedback)=>feedback.arrivalQues);
      timingQues = arr.map((feedback)=>feedback.timingQues);
      priceQues = arr.map((feedback)=>feedback.priceQues);
      findMethodQues = arr.map((feedback)=>feedback.findMethodQues);
      notes = arr.map((feedback)=>feedback.notes);
    }
  }

  function getStats(resultsArray){
    if (resultsArray.length > 0){
      let yesResponses = resultsArray.filter((item) => (item === 'yes'));
      let result =  (yesResponses.length / resultsArray.length)*100; 
      return result.toString().slice(0,5);  
    }
  }

  function findAboutEvent(){
    if (findMethodQues.length > 0){
      let fb = (((findMethodQues.filter((item) => (item === 'facebook')).length)/(findMethodQues.length))*100).toString().slice(0,5);
      let insta = (((findMethodQues.filter((item) => (item === 'instagram')).length)/(findMethodQues.length))*100).toString().slice(0,5);
      let web = (((findMethodQues.filter((item) => (item === 'website')).length)/(findMethodQues.length))*100).toString().slice(0,5);
      let friend = (((findMethodQues.filter((item) => (item === 'friend')).length)/(findMethodQues.length))*100).toString().slice(0,5);
      let other = (((findMethodQues.filter((item) => (item === 'other')).length)/(findMethodQues.length))*100).toString().slice(0,5);
      return(
        <div>
          <p/>
          <h5>{fb}% found about the event through FACEBOOK</h5>
          <h5>{insta}% found about the event through INSTAGRAM</h5>
          <h5>{web}% found about the event through this website</h5>
          <h5>{friend}% found about the event through a friend</h5>
          <h5>{other}% found about the event through another way</h5>
          <p/>
        </div>
      );
    }
  }

  function formulateNotes(){
    let notesArr = [];
    for (let i = 0; i < notes.length ; i++) {
      notesArr.push(<li key={i.toString()}>{notes[i]}</li>);
    }
    return <div>{notesArr}</div>;
  }

  if(arr){
    return (
      <div>
        <p/><br/>
        <div>
          <h1>**Attendees feedback**</h1>
        </div> 
        <div>
          <h3>Number of respondents is:  {arr.length}</h3>
        </div> 
        <br/>
        <div>
          {getStats(arrivalQues)}% said it was easy to arrive to the venue.
        </div>
        <br/>
        <div>
          {getStats(priceQues)}% said that the price of the ticket was suitable.
        </div>
        <br/>
        <div>
          {getStats(timingQues)}% said that the timing of the event was suitable.
        </div>
        <br/>
        <div>
          {findAboutEvent()}
        </div>
        <br/>
        <div>
          <h5>Attendees Notes:</h5>
          {formulateNotes()}
        </div>
      </div>
    );
  }else{
    return <Loading />;
  }
}

export default AttendeesFeedbackPage ;