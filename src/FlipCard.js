import './FlipCard.css';
import img from './Images/img_avatar.png';
import activity1 from './Images/activities2.png'


function FlipCard() {
  return (
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <h6>Hover Me!</h6> */}
                <img src={activity1} alt="img" id='image' />
            </div>
            <div class="flip-card-back">
                <h1>Event Title</h1>
                <p>Musical event, performer: Bilal Shweiki</p>
                <p>Location: Beit Hanina 120</p>
                <p>Date & Time: 29.05.2022, 16:00</p>
            </div>
        </div>
    </div>
  );
}

export default FlipCard;
