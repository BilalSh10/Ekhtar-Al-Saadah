import EventsList from '../../components/eventsFiles/EventsList';
import ArticlesList from '../../components/articlesFiles/ArticlesList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading/Loading';
import TopTrending from "../../components/TopTrending/TopTrending";
import FeaturedEvents from '../../components/FeaturedEvents/FeaturedEvents';
import "./HomePage.css"

function HomePage() {
  const eventsArray = useReadFromDB("upcoming events");
  const articlesArray = useReadFromDB("articles");
  if(eventsArray && articlesArray){
    return (
  	  <div>
        <h2 className="t-events-headline">Top trending</h2>
        <TopTrending className="heroes" trends={eventsArray}/>
        <hr className='hrTopTrending'/>
        <FeaturedEvents className='featured-events' events={eventsArray} edit="no" collectionName = "upcoming events"/>
  	    {/* <EventsList events={eventsArray} edit="no" collectionName = "upcoming events"/>   */}
        <hr className='hrTopTrending'/>
  	    <ArticlesList articles={articlesArray} edit="no"  />
  	  </div> 
    );
  }else{
  	return <Loading />;
  }
}

export default HomePage;