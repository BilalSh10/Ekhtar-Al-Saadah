import { useRef, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";
import {AddDocumentToDB} from '../../components/dbOperations/AddDocumentToDB';

import classes from './AddArticlePage.module.css';

function AddArticlePage() {
  const titleRef = useRef();
  const contentRef = useRef();
  const altRef = useRef();
  const timeRef = useRef();
  const [imgToUpload, setImgToUpload] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  function submitHandler(event){
    event.preventDefault();
    const enteredArticle = {
      title:titleRef.current.value,
      content:contentRef.current.value,
      alt:altRef.current.value,
      time:timeRef.current.value,
      image: imgUrl
    };
    AddDocumentToDB("articles", enteredArticle);
  }

  function alertSuccess(){
    alert("image successfully uploaded");
  }

  const upload = (event) => {
    event.preventDefault();
    if (imgToUpload == null) return;
    const imageRef = ref(storage, `images/${imgToUpload.name + v4()}`);    
    uploadBytes(imageRef, imgToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {setImgUrl(url);}).then(alertSuccess());
    });
  };
  
  return (
    <div className= {classes.card}>
      <form className={classes.form} onSubmit={submitHandler} >
        <h3>You can add a new article here:</h3><p/><p/>
  	    <div className={classes.control}>
          <label htmlFor= 'title'>Title</label>
          <input required type='text' id='title' ref={titleRef}/><p/>
          <label htmlFor= 'content'>Content</label>
          <textarea required id='content' placeholder='article content here' rows='10' ref={contentRef}></textarea><p/>
          <label htmlFor= 'alt'>alt(Image description)</label>
          <input required type='text' id='alt' ref={altRef}/><p/>
          <label htmlFor= 'time'>time</label>
          <input type='datetime-local' required id='time' ref={timeRef}/>
          <div>
            <label htmlFor= 'image'>image</label>
            <input required type="file" id='image' onChange={(event) => {setImgToUpload(event.target.files[0]);}}/>
            <button onClick={upload}> Upload Image </button>
          </div>  
          <p/>
        </div>
        <div>
 	      <button>Add article</button>
 	      </div>
  	  </form> 
    </div>
  );
}

export default AddArticlePage;