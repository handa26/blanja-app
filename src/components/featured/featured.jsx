import React from "react";

import "../../styles/featured.css";
import benjaminVoros from "../../assets/benjamin-voros.png";
import ianDooley from "../../assets/ian-dooley.png";

const Featured = () => {
  return (
    <div id='section'>
      <div className='container'>
        <div className='tags'>
          <div className='list'>
            <div class='item-tags'>
              <img src={benjaminVoros} alt='tags' />
              <p class='item-text'>Black edition</p>
            </div>
            <div class='item-tags'>
              <img src={ianDooley} alt='tags' />
              <p class='item-text'>Trends in 2020</p>
            </div>
            <div class='item-tags'>
              <img src={benjaminVoros} alt='tags' />
              <p class='item-text'>Minimalist</p>
            </div>
            <div class='item-tags'>
              <img src={ianDooley} alt='tags' />
              <p class='item-text'>Limited edition</p>
            </div>
            <div class='item-tags'>
              <img src={benjaminVoros} alt='tags' />
              <p class='item-text'>Black friday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;