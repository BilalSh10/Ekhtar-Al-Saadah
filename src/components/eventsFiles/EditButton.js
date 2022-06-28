import { useNavigate} from "react-router-dom";
import { DeleteDocumentFromDB } from "../dbOperations/DeleteDocumentFromDB";
import "./EditButton.css";

function EditButton(props) {
  const navigate = useNavigate();

  let queryData = {'title':props.title, 'image':props.image, 'alt':props.alt, 'description':props.description,
  'venue':props.venue, 'city':props.city,'time':props.time, 'collectionName':props.collectionName,'id':props.id, 'edit':props.edit,
   registrationLink:props.registrationLink, 'priority':props.priority, 'type':props.type, 'category':props.category};

  function deleteHandler() {
    DeleteDocumentFromDB(props.collectionName, props.id);
  }

  function evaluationsHandler() {
    navigate({pathname: '/AttendeesFeedback/'+ props.id});
  }

  function buildQuery(){
    var query = [];
    for (var key in queryData) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryData[key]));
    }
    let url =  (query.length ? '?' + query.join('&') : '');
    return(url);
  }

  function editHandler() {
    navigate({pathname: '/EditEventPage/'+ props.id, search:buildQuery()});
  }


  if (props.edit === "yes") {
    if(props.collectionName === 'past events'){
      return(  
      <div className="Container">
      <div className="EventTitle">
        <h3>{props.title}</h3>
      </div>  
      <div className="EventEditCont">
        <div>
          <button className="EventDeleteButton" onClick={editHandler}>
            Edit event
          </button>
        </div>
         <div>
          <button className="EventDeleteButton" onClick={evaluationsHandler}>
            Attendees Feedback
          </button>
        </div>
        <div>
          <button className="EventDeleteButton" onClick={deleteHandler}>
            Delete event
          </button>
        </div>
      </div>
    </div>
    );
    }else{
      return(
        <div className="Container">
      <div className="EventTitle">
        <h3>{props.title}</h3>
      </div>  
      <div className="EventEditCont">
        <div>
          <button className="EventDeleteButton" onClick={editHandler}>
            Edit event
          </button>
        </div>
        <div>
          <button className="EventDeleteButton" onClick={deleteHandler}>
            Delete event
          </button>
        </div>
      </div>
    </div>  

      );
    }
  }
}

export default EditButton;