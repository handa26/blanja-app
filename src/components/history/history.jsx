import React from "react";

import "../../styles/history.css";

const History = ({name, brand, price}) => {
  return (
    <>
      <div className='col-md-2 d-flex justify-center'>
        <img
          src='https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png'
          className='card-img w-75 h-75 m-auto'
          alt='...'
        />
      </div>
      <div
        className='col-md-4 d-flex justify-center'
        style={{ alignItems: "center" }}
      >
        <div className='card-body'>
          <h6 className='card-title font-weight-bold'>{name}</h6>
          <p className='card-text'>{brand}</p>
        </div>
      </div>
      <div
        className='col-md-3 d-flex justify-center'
        style={{ alignItems: "center" }}
      >
        <div className='card-body'>
          <ul className='horizontal-list d-flex justify-center'>
            <li>
              <span className='color-selected rounded-circle bg-secondary'>
                <i className='fas fa-minus'></i>
              </span>
            </li>
            <li style={{ margin: "0.9rem 1rem" }}>
              <span>1</span>
            </li>
            <li>
              <span className='color-selected rounded-circle'>
                <i className='fas fa-plus'></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className='col-md-2 d-flex justify-center'
        style={{ alignItems: "center" }}
      >
        <div className='card-body'>
          <h4 className='cost'>Rp.{price}</h4>
        </div>
      </div>
      <div className='col-md-4 detail-price'>
        <div className='card text-center w-100'>
          <div className='card-body'>
            <h5 className='text-left font-weight-bold'>Total Summary</h5>
            <div className='price'>
              <p className='font-weight-bold d-inline'>Total Price</p>
              <p className='text-dark d-inline'>
                <b>Rp.{price}</b>
              </p>
            </div>
            <a href className='btn-buy d-xs-none'>
              buy
            </a>
            <div className='btn d-flex d-lg-none'>
              <a href className='btnBtm btn-buy mt-2'>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;