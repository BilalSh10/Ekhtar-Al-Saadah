import './EventComp.css';
import EventImg from '../../Images/activities3.jpg';


function EventComp() {
  return (
    <div class="EventCompCont">
      <div className='EventCompImgDiv'>
            <img src={EventImg} id='eventImg' alt='event-img'/>
        </div>
        <div className='EventCompSummaryDiv'>
            <h4 className='EventCompHeadline'>This is the headline</h4>
            <p className='EventCompIntro'>Here we can have a short intro of the event, such
            as the time and date of the event, 1-line general summary, where it's going
            to be held. this is a paragraph.</p>
            <div className='MoreDetailsBtnDiv'>
            </div>
        </div>
        
    </div>
  );
}

export default EventComp;
