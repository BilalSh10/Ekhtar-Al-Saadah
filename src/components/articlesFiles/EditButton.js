import { useRef } from 'react';
import {DeleteDocumentFromDB} from '../dbOperations/DeleteDocumentFromDB';
import { db } from "../../firebase-config";
import {updateDoc,doc} from "firebase/firestore";

function EditButton(props) {
  const document = doc(db, "articles", props.id);

  const titleInputRef = useRef();
  const timeInputRef = useRef();
  const contentInputRef = useRef();

  function deleteHandler(){
    DeleteDocumentFromDB("articles", props.id);
  }

  async function editTitle(newValue){ 
    await updateDoc(document, {"title":titleInputRef.current.value});
  }

  async function editTime(newValue){  
    await updateDoc(document, {"time":timeInputRef.current.value});
  }

  async function editContent(newValue){
    await updateDoc(document, {"content":contentInputRef.current.value});
  }
  
  if(props.edit === "yes"){
    return (
    <div>  
      <div>  
        <button onClick = {deleteHandler}>delete article</button>
      </div>
      <div>
        <div>
          <label htmlFor= 'title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
          <button onClick = {() => {editTitle();}}>edit title</button>
        </div>  
        <div>
          <label htmlFor= 'time'>Time</label>
          <input type='datetime-local' required id='time' ref={timeInputRef}/>
          <button onClick = {() => {editTime();}}>edit time</button>
        </div>  
        <div>
          <label htmlFor= 'content'>Content</label>
          <input type='text' required id='content' ref={contentInputRef}/>
          <button onClick = {() => {editContent();}}>edit content</button>
        </div> 
      </div>
    </div>  
    );
  }
}

export default EditButton;