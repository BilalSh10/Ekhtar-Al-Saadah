import { useNavigate } from "react-router-dom";

function TimeButtonItem(props) {
  const currentTime = new Date();
  const eventTime = new Date(props.time);
  
  const navigate = useNavigate();
  const cancelTicket = () => {
    navigate('/CancelTicket');
  };

  const bookTicket = () => {
    // navigate('/BookTicket/'+props.registrationLink);
    window.open(props.registrationLink,'_blank');
  };

  const evaluationForm = () => {
    navigate('/EvaluationForm/'+props.id);
  };


  if((eventTime > currentTime)&&(props.edit==="no")){
    return (
    <div className="bookCancelBtns">  
      <button className="bookbtnEventsPage" onClick={bookTicket}> Book a ticket </button>
      <button className="cancelbtnEventsPage" onClick={cancelTicket}>Cancel Registration</button>
    </div>  
    );
  }else if((currentTime - eventTime < (1000 * 60 * 60 * 24 * 14))&&(props.edit==="no")){ //If the event was at most two weeks ago fill the evaluation form
    return (
    <div>  
      <button onClick={evaluationForm}>Fill Evaluation Form</button>
    </div>
    );
  }
}

export default TimeButtonItem;
