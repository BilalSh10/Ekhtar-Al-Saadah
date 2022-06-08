import EventsList from '../../components/eventsFiles/EventsList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading';

function PastEventsPage() {
  const arr = useReadFromDB("past events");
  if(arr){  	
    return (
  	  <div>
  	    <EventsList events={arr} edit="no" collectionName = "past events"/ >
  	  </div>
    );
  }else{
  	return <Loading />;
  }
}

export default PastEventsPage;