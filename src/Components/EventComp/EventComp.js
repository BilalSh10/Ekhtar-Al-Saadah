import './EventComp.css';
import EventImg from '../../Images/activities3.jpg';


function EventComp(props) {
  return (
    <div class="EventCompCont">
      <div className='EventCompImgDiv'>
            <img src = {props.image} id='eventImg' alt = {props.alt}/>
        </div>
        <div className='EventCompSummaryDiv'>
            <h4 className='EventCompHeadline'>title: {props.title}</h4>
            <p className='EventCompIntro'>description: {props.description}</p>
            <h3>city: {props.city}</h3>
            <div className='MoreDetailsBtnDiv'>
            </div>
        </div>
        
    </div>
  );
}

export default EventComp;
