import React from "react";
import "./TopTrending.css";
import buildingImg from "../../Images/temp1.jpeg";
import tempimg from "../../Images/temp.jpeg";


function TopTrending() {
  return (
    <div className="below-nav">
      <div className="image biala">
        <img className="image__img" src={buildingImg} alt="temp1" id='building-img' />
        <div className="image__overlay image__overlay--primary">
          <div className="image__title">Bricks</div>
          <p className="image__description">Here we have a brick wall.</p>
        </div>
      </div>
      <div className="image biala">
        <img className="image__img" src={tempimg} alt="temp" id='building-img1' />
        <div className="image__overlay image__overlay--primary">
          <div className="image__title">Bricks</div>
          <p className="image__description">Here we have a brick wall.</p>
        </div>
      </div>
    </div>
  );
}

export default TopTrending;
