import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import EventsList from '../../components/eventsFiles/EventsList';
import Loading from '../../components/Loading/Loading';
function EditPastEventsPage() {
  const arr = useReadFromDB("past events");
  if(arr){  	
    return (
      <div>
  	    <EventsList events={arr} edit="yes" collectionName="past events"/>
  	  </div>
    );
  }else{
    return <Loading />;
  }
}

export default EditPastEventsPage ;
