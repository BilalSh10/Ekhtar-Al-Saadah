import "./About.css";
import hishImg1 from "../../Images/hish.jpg";
import JARVIS from "../../Images/jarvis.png";
import activity1Img from "../../Images/temp3.jpeg";
import activity2Img from "../../Images/activities2.png";
import activity3Img from "../../Images/activities3.jpg";
import React from "react";

function About() {
  return (
    <div className="about-body">
      <div className="containerA">
        <div className="general-info">
          <div className="fundementals">
            <a id="topOfPage"></a>
            <div className="anchor-links">
              <a href="#association"> <button className="anchor-links-btn"> Association</button> </a>
              <a href="#staff"> <button className="anchor-links-btn"> Staff</button> </a>
              <a href="#volunteers"> <button className="anchor-links-btn"> Volunteers</button> </a></div>

              <a id="association" className="anchors"></a>

            <h1 className="assoname">Ekhtar Al-Saadah</h1>
            <p>
              Here we will have as many paragraphs about the association as we
              need, statin all the information about it, such as when it was
              founded, by whom, where they do their activities, what kind of
              activities and so on.
            </p>
          </div>
        </div>
        <div className="association-images">
          <img src={activity1Img} alt="img1" id="activity1" />
          <img src={activity2Img} alt="img2" id="activity2" />
          <img src={activity3Img} alt="img3" id="activity3" />
        </div>
      </div>
      
      <a href="#topOfPage">back to the top</a>
      <hr />
      <a id="staff" className="anchors"></a>
      <h1 className="title1">Staff</h1>
      <div className="containerB">
        <div className="coo">
          <div className="hisham-info">
              <h2>Hisham Suliman</h2>
              <p>
              Suliman was born on Tuesday, February 28, 1978 (42 years; as in 2019) in Nazareth, Israel.
              Since childhood, he had a desire to be an actor. In 1997, he joined Yoram Levinstein Studio
              in Tel Aviv for acting and finished his graduation by 2000. In 2007, he established the Fringe Theater in Nazareth.
              </p>
          </div>
          <div className="hisham-images">
            <img src={hishImg1} alt="imgh1" id="hisham1" />
          </div>
        </div>
        <a href="#topOfPage">back to the top</a>
      </div>

      <hr />
      <a id="volunteers" className="anchors"></a>
      <h1 className="title1">Volunteers</h1>
      <div className="containerB">
        <div className="coo">
          <div className="hisham-info">
              <h2>Volunteer ABC</h2>
              <p>
              Suliman was born on Tuesday, February 28, 1978 (42 years; as in 2019) in Nazareth, Israel.
              Since childhood, he had a desire to be an actor. In 1997, he joined Yoram Levinstein Studio
              in Tel Aviv for acting and finished his graduation by 2000. In 2007, he established the Fringe Theater in Nazareth.
              </p>
          </div>
          <div className="hisham-images">
            <img src={JARVIS} alt="imgh1" id="hisham1" />
          </div>
        </div>
        <a href="#topOfPage">back to the top</a>
      </div>
    </div>
  );
}

export default About;
