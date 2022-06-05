import eventImg from '../../Images/activities2.png';
import './SingleArticle.css';

function SingleArticle() {
  return (
    <div className="SingleArticleCont">
      <h3 className="SingleArticleTitle">Event Title</h3>
      <img src={eventImg} alt="img" id='SingleArticleImg' />
      <div className="SingleArticleDetails">
          <h4 className="EveryParaHeadline">Intro:</h4>
          <p className="EveryParaInfo">Here goes the description of the event.</p>
          <h4 className="EveryParaHeadline">Content:</h4>
          <p className="EveryParaInfo">Here goes the date and time of the event.</p>
      </div>
    </div>
  );
}

export default SingleArticle;
