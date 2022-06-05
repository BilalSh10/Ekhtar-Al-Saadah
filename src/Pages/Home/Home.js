import "./Home.css";
import TopTrending from "../../Components/TopTrending/TopTrending";
import FeaturedEvents from '../../Components/FeaturedEvents/FeaturedEvents';
import FeaturedArticles from '../../Components/FeaturedArticles/FeaturedArticles';


function Home() {
  return (
    <div className="homepage">
      <h2 className="t-events-headline">Top trending</h2>
      <TopTrending className="heroes" />
      <hr />
      {/* <h2 className="f-events-headline">Featured Events</h2> */}
      {/* <div className="featured-events">
        <FlipCard className="featured-child" />
        <FlipCard className="featured-child" />
        <FlipCard className="featured-child" />
      </div>
      <hr /> */}
      {/* <br /> */}
      <FeaturedEvents className='featured-events' />
      {/* <h1 className="f-articles-headline">Featured Articles</h1> */}
      {/* <div className="featured-articles">
        <BlogComp className="article-child" />
        <BlogComp className="article-child" />
        <BlogComp className="article-child" />
      </div> */}
      <FeaturedArticles className='featured-articles' />
    </div>
  );
}

export default Home;
