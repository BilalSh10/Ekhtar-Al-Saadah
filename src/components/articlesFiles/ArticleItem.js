import './ArticleItem.css';
import EditButton from './EditButton';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ArticleItem(props) {
  return (
    <div className = "blog-box"> 
      <div className="blog-img">
        <img src = {props.image} alt = {props.alt} id="blogImg"/>
      </div>
      <div className="blog-summary">
        <h4 className="BlogCompHeadline">{props.title}</h4>
        <p className="blog-intro"> {props.content} </p>
        <p>{props.time}</p>


        
      </div>      
      <EditButton edit = {props.edit} id = {props.id} />
    </div>
  );
}

export default ArticleItem;