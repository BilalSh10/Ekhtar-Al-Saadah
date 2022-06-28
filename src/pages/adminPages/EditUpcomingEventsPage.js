import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import EventsList from '../../components/eventsFiles/EventsList';
import Loading from '../../components/Loading/Loading';

function EditUpcomingEventsPage() {
  const arr = useReadFromDB("upcoming events");
  if(arr){  	
    return (
      <div>
  	    <EventsList events={arr} edit="yes" collectionName="upcoming events"/>
  	  </div>
    );
  }else{
    return <Loading />;
  }
}

export default EditUpcomingEventsPage;