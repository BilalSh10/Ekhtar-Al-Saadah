import {DeleteDocumentFromDB} from '../dbOperations/DeleteDocumentFromDB';

function DeleteButton(props) {
  function deleteHandler(){
    DeleteDocumentFromDB("reviews", props.id);
  }

  if(props.edit === "yes"){
    return(
      <div>  
        <button onClick = {deleteHandler}>delete review</button>
      </div>  
    );
  }
}

export default DeleteButton;