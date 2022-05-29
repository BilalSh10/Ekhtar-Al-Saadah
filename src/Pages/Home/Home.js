import '../../App.css';
import './Home.css';
import FlipCard from '../../FlipCard';
import Heroes from '../../Heroes';
import BlogComp from '../../OneArticle';


function Home() {
  return (
    <div className='homepage'>
            <h2 className='t-events-headline'>Top trending</h2>
      <Heroes className='heroes' />
      <hr />

      <h2 className='f-events-headline'>Featured Events</h2>
      <div className='featured-events'>
        <FlipCard className='featured-child' />
        <FlipCard className='featured-child' />
        <FlipCard className='featured-child' />
      </div>
      <hr />
      {/* <br /> */}
      
      <h1 className='f-articles-headline'>Featured Articles</h1>
      <div className='featured-articles'>
        <BlogComp className='article-child' />
        <BlogComp className='article-child' />
        <BlogComp className='article-child' />
      </div>
      {/* <Heroes className='heroes' /> */}

      {/* <FlipCard /> */}
    </div>
  );
}

export default Home;
