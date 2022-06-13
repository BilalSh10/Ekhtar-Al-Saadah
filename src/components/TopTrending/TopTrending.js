import React from "react";
import "./TopTrending.css";

function TopTrending(props) {

  // const arr = [];
  // let i = 0;
  
  props.trends.sort(function(a, b){
    console.log(a.priority);
    return b.priority - a.priority});
  // // console.log(props.trends[1]);
  // // console.log("bilal");
  // // props.trends.map((trend) => {
  //   arr[i] = trend.priority;
  //   i++;
  // // });

  // arr.sort(function(a, b){return a - b});
  // const newArr = arr.slice(0, 2);


  return (
    <div className="below-nav">
     
          <div className="image biala0">
           <img className="image__img TopTrendingImg" src={props.trends[0].image} alt={props.trends[0].alt} />
           <div className="image__overlay image__overlay--primary">
             <div className="image__title">{props.trends[0].title}</div>
             <p className="image__description">
             {props.trends[0].time}
               <br />
               
               {props.trends[0].city}
             </p>
           </div>
         </div>

         <div className="image biala0">
           <img className="image__img TopTrendingImg" src={props.trends[1].image} alt={props.trends[1].alt} />
           <div className="image__overlay image__overlay--primary">
             <div className="image__title">{props.trends[1].title}</div>
             <p className="image__description">
             {props.trends[1].time}
               <br />
               {props.trends[1].city}
             </p>
           </div>
         </div>  
     
          
    </div>
  );
}

export default TopTrending;
