// import  { useState } from 'react';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
const YourComponent = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const groups = document.getElementsByClassName("card-group");

  // const handleLoveClick = () => {
  //   const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  //   setActiveIndex(nextIndex);
  // };

  // const handleHateClick = () => {
  //   const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  //   setActiveIndex(nextIndex);
  // };
  // const handleHateClick = () => {
    // This is where you would define what should happen when the button is clicked.
    // You can put your logic or function calls here.
    // For example:
    // console.log("Hate button clicked");
  // };
  return (
    <div class="test"> 

<div class="card-swiper">
  <div class="card-groups">
    <div class="card-group" data-index="0" data-status="active">
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
    <div class="card-group" data-index="1" data-status="unknown">
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
    <div class="card-group" data-index="2" data-status="unknown">
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
      <div class="little-card card">

      </div>
      <div class="big-card card">

      </div>
    </div>
  </div>
  {/* <div class="card-swiper-buttons">
    <div id="defnic" class="gps-button-wrapper hmm"> 
                    <Link to='/contact' className="flat-button">CONTACT ME</Link>
                
                </div> */}
    {/* <button id="hate-button" onClick={handleHateClick}>
      <i class="fa-solid fa-x"></i>
    </button> */}
    {/* <button id="love-button" onclick="handleLoveClick()">
      <i class="fa-solid fa-heart"></i>
    </button> */}
  </div>
</div>

// </div>

    );

}

export default YourComponent;
