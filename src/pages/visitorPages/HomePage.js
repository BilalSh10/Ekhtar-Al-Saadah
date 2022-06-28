import ArticlesList from '../../components/articlesFiles/ArticlesList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading/Loading';
import TopTrending from "../../components/TopTrending/TopTrending";
import FeaturedEvents from '../../components/FeaturedEvents/FeaturedEvents';

function HomePage() {
  const eventsArray = useReadFromDB("upcoming events");
  const articlesArray = useReadFromDB("articles");
  
  if(eventsArray && articlesArray){
    eventsArray.sort((a, b) => a.priority - b.priority);

    return (
  	  <div>
        <h2 className="t-events-headline">Top trending</h2>
        <TopTrending className="heroes" trends={eventsArray.slice(0,2)}/>
        <hr className='hrTopTrending'/>
        <FeaturedEvents className='featured-events' events={eventsArray.slice(2,8)} edit="no" collectionName = "upcoming events"/>
        <hr className='hrTopTrending'/>
  	    <ArticlesList articles={articlesArray.slice(0,6)} edit="no" />
  	  </div> 
    );
  }else{
  	return <Loading />;
  }
}

export default HomePage;