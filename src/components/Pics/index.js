// import React, { useState } from 'react';
import React from 'react';
import './index.css';

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
</div>
</div>

    );

}

export default YourComponent;
