import React from "react";
import "./TopTrending.css";

function TopTrending(props) { 

  function trendingItem(i){
    return(
      <div key={i.toString()} className="image biala0">
        <img className="image__img TopTrendingImg" src={props.trends[i].image} alt={props.trends[i].alt} />
        <div className="image__overlay image__overlay--primary">
          <div className="image__title">
            {props.trends[i].title}
          </div>
          <p className="image__description">
            {(props.trends[i].time).replace("T", " ").replace("-","/").replace("-","/")}
            <br/>               
            {props.trends[i].venue}, {props.trends[i].city}
          </p>
        </div>
      </div> 
    );
  }

  let arr = [];
  for (let i = 0; i < props.trends.length ; i++) {
    arr.push(trendingItem(i));
  }

  return(
    <div className="below-nav">  
      {arr}
    </div>
  );
}

export default TopTrending;