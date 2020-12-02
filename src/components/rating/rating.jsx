import React from "react";

import Star from "../../assets/Star.png";

const Rating = ({rating}) => {
  let a = "";
  for (let i = 0; i < rating; i++) {
    a += i;
  }
  let lop = a.split("");
  return (
    <div className='d-flex'>
      <div className='rate'>
        {lop.map((data) => {
          return <img src={Star} alt='rating' />;
        })}
      </div>
      {/* <p className='text-muted rate-num'>{rating}</p> */}
    </div>
  );
}

export default Rating;