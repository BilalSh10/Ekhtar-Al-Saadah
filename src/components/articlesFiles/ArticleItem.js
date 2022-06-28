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
      <p>{props.time.replace("T", " , ")}</p>
      <EditButton edit = {props.edit} id = {props.id} time = {props.time} title = {props.title} content = {props.content} />   
      <ReadMore className='ReadMoreArtical'
        edit={props.edit} title={props.title} image={props.image} alt={props.alt} content={props.content} 
        time={props.time.replace("T", ", ")} id={props.id}
      />
    </div>   
  </div>
  );
}

export default ArticleItem;