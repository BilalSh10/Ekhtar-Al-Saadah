import ArticleItem from './ArticleItem';
import './ArticlesList.css';

function ArticlesList(props) {
  return (
  <div className='AllBlogsCont'>  
    <h2 className='AllBlogsPageHeadline'>Articles</h2>
    <div className='AllBlogsList'>
      {props.articles.map((article) => (
        <ArticleItem className='OneBlog' 
          key = {article.id}
          id = {article.id}
          image = {article.image}
          alt = {article.alt}
          title = {article.title}
          content = {article.content}
          time = {article.time}
          edit = {props.edit}
        />  
        ))}
    </div>
  </div>  
  );
}

export default ArticlesList;