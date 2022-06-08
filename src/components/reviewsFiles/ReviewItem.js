import DeleteButton from './DeleteButton';
import classes from './ReviewItem.module.css';

function ReviewItem(props){
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h2>{props.name}</h2>
        <h3>{props.score}</h3>
        <p>{props.description}</p>
      </div>  
      <div>
        <DeleteButton edit = {props.edit} id = {props.id}/>
      </div>
    </div>
  );
}

export default ReviewItem;