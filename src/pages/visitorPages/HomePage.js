import EventsList from '../../components/eventsFiles/EventsList';
import ArticlesList from '../../components/articlesFiles/ArticlesList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading';

function HomePage() {
  const eventsArray = useReadFromDB("upcoming events");
  const articlesArray = useReadFromDB("articles");
  if(eventsArray && articlesArray){
    return (
  	  <div>
  	    <EventsList events={eventsArray} edit="no" collectionName = "upcoming events"/>  
  	    <ArticlesList articles={articlesArray} edit="no"  />
  	  </div> 
    );
  }else{
  	return <Loading />;
  }
}

export default HomePage;