import "./FlipCard.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function FlipCard(props) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={props.image} alt={props.alt} id="image" />
        </div>
        <div class="flip-card-back">
          <h1>{props.title}</h1>
          <p>{props.type}</p>
          <p>{props.city}</p>
          <p>{props.time}</p>
          <div className="cont">
            <Link className="EventPageLink" to="/EventPage">
              <li className="EventPageLinkBlock">
                Read More&nbsp;
                <BsChevronDoubleRight id="icon" />
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
