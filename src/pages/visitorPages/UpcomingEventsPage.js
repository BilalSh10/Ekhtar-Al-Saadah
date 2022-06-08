import EventsList from '../../components/eventsFiles/EventsList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading';

function UpcomingEventsPage() {
  const arr = useReadFromDB("upcoming events");
  if(arr){  	
    return (
  	  <div>
  	    <EventsList events={arr} edit="no" collectionName = "upcoming events" / >
  	  </div>
    );
  }else{
  	return <Loading />;
  }
}

export default UpcomingEventsPage;