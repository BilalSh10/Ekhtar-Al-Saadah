import './Articles.css';
import OneArticle from '../../OneArticle';

function Articles() {
  return (
    <div className='blog-body'>
        <h2 className='head'>Articles</h2>
        <p>-- Here you can view some of the events held in the last week,
          we would apreciate your review on them if you attended --
        </p>
        <div className='blog-list'>
            <OneArticle className='single-article' />
            <OneArticle className='single-article' />
            <OneArticle className='single-article' />
        </div>
    </div>
  );
}

export default Articles;
