function TimeButtonItem(props) {
  const currentTime = new Date();
  const eventTime = new Date(props.time);
  if(eventTime > currentTime){
    return (
    <div>  
      <button>Book a ticket</button>
    </div>  
    );
  }else if(currentTime - eventTime < (1000 * 60 * 60 * 24 * 14)){ //If the event was at most two weeks ago fill the evaluation form
    return (
    <div>  
      <button>Fill Evaluation Form</button>
    </div>
    );
  }
}

export default TimeButtonItem;
