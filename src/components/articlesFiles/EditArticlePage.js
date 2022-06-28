import { useRef } from "react";
import { useLocation } from 'react-router';
import { db } from "../../firebase-config";
import { updateDoc, doc } from "firebase/firestore";

function EditArticlePage(props) {
  let query = new URLSearchParams(useLocation().search);
  const document = doc(db, "articles", query.get("id"));

  const titleInputRef = useRef();
  const timeInputRef = useRef();
  const contentInputRef = useRef();

  async function editTitle(newValue){ 
    if(titleInputRef.current.value)
    	await updateDoc(document, {"title":titleInputRef.current.value});
  }

  async function editTime(newValue){  
     if(timeInputRef.current.value) 	
    	await updateDoc(document, {"time":timeInputRef.current.value});
  }

  async function editContent(newValue){
  	 if(contentInputRef.current.value) 
    	await updateDoc(document, {"content":contentInputRef.current.value});
  }

  return (
    <div>
      <p/><p/>
      <div>
        <h4 className="PreviousDetails">Title: {query.get("title")}</h4>
        <div className="InputAndBtnCont">
          <input className="NewEventDetailsInput" type="text" ref={titleInputRef}/>
          <button className="NewEventDetailsBtn" onClick={() => {editTitle();}}>
            Edit
          </button>
        </div>
      </div>
  	  <div>
        <h4 className="PreviousDetails">Time: {query.get("time")}</h4>
        <div className="InputAndBtnCont">
          <input className="NewEventDetailsInput" type="datetime-local" ref={timeInputRef} />
          <button className="NewEventDetailsBtn" onClick={() => {editTime();}}>
            Edit
          </button>
        </div>
      </div>
      <div>
        <h4 className="PreviousDetails">Content: {query.get("content")}</h4>
        <div className="InputAndBtnCont">
          <input className="NewEventDetailsInput" type="textarea"ref={contentInputRef}/>
          <button className="NewEventDetailsBtn" onClick={() => {editContent();}}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );      
}

export default EditArticlePage;