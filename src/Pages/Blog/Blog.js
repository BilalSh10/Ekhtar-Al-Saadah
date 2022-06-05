import './Blog.css';
import BlogComp from '../../Components/BlogComp/BlogComp';


function Blog() {
  return (
    <div className='AllBlogsCont'>
        <h2 className='AllBlogsPageHeadline'>Articles</h2>
        <p>-- Here you can view some of the events held in the last week,
          we would apreciate your review on them if you attended --
        </p>
        <div className='AllBlogsList'>
            <BlogComp className='OneBlog' />
            <BlogComp className='OneBlog' />
            <BlogComp className='OneBlog' />
        </div>
    </div>
  );
}

export default Blog;
