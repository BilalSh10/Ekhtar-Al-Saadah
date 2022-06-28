import { useNavigate} from "react-router-dom";
import {DeleteDocumentFromDB} from '../dbOperations/DeleteDocumentFromDB';

function EditButton(props) {
  const navigate = useNavigate();

  let queryData = {'id':props.id , 'title':props.title, 'time':props.time, 'content':props.content}

  function buildQuery(){
    var query = [];
    for (var key in queryData) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryData[key]));
    }
    let url =  (query.length ? '?' + query.join('&') : '');
    return(url);
  }

  function deleteHandler(){
    DeleteDocumentFromDB("articles", props.id);
  }

    function editHandler() {
    navigate({pathname: '/EditArticlePage/'+ props.id, search:buildQuery()});
  }

  if(props.edit === "yes"){
    return (
    <div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <button onClick={editHandler}>
          edit article
        </button>
      </div>
      <p/><p/>
      <div>  
        <button onClick = {deleteHandler}>
          delete article
        </button>
      </div>
    </div>  
    );
  }
}

export default EditButton;