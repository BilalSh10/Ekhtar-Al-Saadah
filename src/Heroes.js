import React from 'react';
import "./heroes.css";
import buildingImg from './Images/temp1.jpeg';
import tempimg from './Images/temp.jpeg'
// import HeaderPhoto from './img_avatar.png'

function Heroes() {
  return (
    <div className='below-nav'>
        <img src={buildingImg} alt="img" id='building-img' />
        <img src={tempimg} alt="img" id='building-img1' />
    </div>
  );
}

// {/* <div className='below-nav'>
//         <div className='left-side'>
//           <h2 className='moto'>Here goes the 2-line moto</h2>
//           <p className='intro'>here we can write some words</p>
//           <div className='buttons'>
//             <p className='btns'>here goes two buttons, one to the events and one to the about page</p>
//           </div>
//         </div>
//         <div className='association-image'>
//           <img src={buildingImg} alt="img" id='building-img' />
//           {/* <p>here goes an image of the building</p> */}
//         </div>
//     </div> */}

export default Heroes;