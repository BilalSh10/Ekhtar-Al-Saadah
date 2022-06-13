import './ArticleItem.css';
import EditButton from './EditButton';
import ReadMore from './ReadMore';

function ArticleItem(props) {
  return (
  <div className="EventCompCont0">
    <div className="EventCompImgDiv">
        <img src = {props.image} alt = {props.alt} id="eventImg"/>
    </div>
    
    <div className="eventContent">
      <h4 className="BlogCompHeadline">{props.title}</h4>
      {/* <p className="blog-intro"> {props.category}...</p> */}
      <p>{props.time}</p>

      <EditButton
        edit = {props.edit} id = {props.id}
      />
      
      <ReadMore className='ReadMoreArtical'
        edit={props.edit} title={props.title} image={props.image} alt={props.alt} content={props.content} 
        time={props.time} id={props.id}
      />
    </div>
    
  </div>
  );
}

export default ArticleItem;