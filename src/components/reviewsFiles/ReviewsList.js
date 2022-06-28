import ReviewItem from './ReviewItem';
import classes from './ReviewsList.module.css';

function ReviewsList(props) {
  return (
    <ul className={classes.list}>
      {props.reviews.map((review) => 
      	<ReviewItem
      	  key = {review.id}
      	  id = {review.id}
      	  name = {review.name}
      	  score = {review.score}
      	  description={review.description}
          edit = {props.edit}
      	/>)}
    </ul>
  );
}

export default ReviewsList;


