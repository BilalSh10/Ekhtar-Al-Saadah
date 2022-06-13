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
        <h3 className={classes.AddArticleHead}>You can add a new article here:</h3>
        <br />
  	    <div className={classes.control}>
          <label className={classes.label} htmlFor= 'title'>Title</label>
          <input className={classes.input} required type='text' id='title' ref={titleRef}/><p/>
          <label className={classes.label} htmlFor= 'content'>Content</label>
          <textarea className={classes.textarea} required id='content' placeholder='article content here' rows='6' ref={contentRef}></textarea><p/>
          <label className={classes.label} htmlFor= 'alt'>alt(Image description)</label>
          <input className={classes.input} required type='text' id='alt' ref={altRef}/><p/>
          <label className={classes.label} htmlFor= 'time'>time</label>
          <input className={classes.input} type='datetime-local' required id='time' ref={timeRef}/>
          <div className={classes.inputImageCont}>
            <label className={classes.label} htmlFor= 'image'>image</label>
            <input className={classes.input} required type="file" onChange={(event) => {setImgToUpload(event.target.files[0]);}}/>
            <button className={classes.addimgbtn} onClick={upload}> Upload Image </button>
          </div>  
          <p/>
        </div>
        <div className={classes.container}>
 	      <button className={classes.addeventbtn}>Add article</button>
 	      </div>
  	  </form> 
    </div>
  );
}

export default AddArticlePage;