import React from 'react';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import ReviewsList from '../../components/reviewsFiles/ReviewsList';
import Loading from '../../components/Loading';

function ReviewsPage() {
  const arr = useReadFromDB("reviews");
  if(arr){  	
    return (
  	  <div>
  	    <ReviewsList reviews={arr} edit="no"/>
  	  </div>
    );
  }else{
  	return <Loading />;
  }
}

export default ReviewsPage;