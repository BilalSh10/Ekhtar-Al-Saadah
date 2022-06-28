import DeleteButton from './DeleteButton';
import classes from './ReviewItem.module.css';

function ReviewItem(props){
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h2 className={classes.nameHead}>{props.name}</h2>
        <h3 className={classes.scoreHead}>{props.score}</h3>
        <p className={classes.DescriptionPara}>{props.description}</p>
      </div>  
      <div className={classes.btnholder}>
        <DeleteButton edit={props.edit} id={props.id}/>
      </div>
    </div>
  );
}

export default ReviewItem;