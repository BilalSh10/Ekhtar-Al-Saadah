import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import ReviewsList from '../../components/reviewsFiles/ReviewsList';
import Loading from '../../components/Loading/Loading';
function EditReviewsPage() {
  const arr = useReadFromDB("reviews");
  if(arr){  	
    return (
      <div>
  	    <ReviewsList reviews={arr} edit="yes"/>
  	  </div>
    );
  }else{
    return <Loading />;
  }
}

export default EditReviewsPage ;