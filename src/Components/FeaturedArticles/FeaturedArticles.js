import './FeaturedArticles.css';
import BlogComp from '../BlogComp/BlogComp';

function FeaturedArticles() {
  return (
    <div className="FeaturedArticlesDiv">
      <h1 className="FeaturedArticlesHeadline">Featured Articles</h1>
      <div className="FeaturedArticlesCont">
        <BlogComp className="FeaturedArticleChild" />
        <BlogComp className="FeaturedArticleChild" />
        <BlogComp className="FeaturedArticleChild" />
      </div>
    </div>
  );
}

export default FeaturedArticles;
