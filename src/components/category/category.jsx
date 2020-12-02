import React from "react";

import tShirt from "../../assets/t-shirt.png";
import shorts from "../../assets/shorts.png";
import jacket from "../../assets/jacket.png";
import pants from "../../assets/pants.png";
import shoes from "../../assets/shoes.png";

import "../../styles/category.css";

const Category = () => {
  return (
    <div id='section'>
      <div className='category'>
        <div className='container'>
          <div className='head'>
            <h2>Category</h2>
            <span className='text-muted'>
              What are you currently looking for
            </span>
          </div>

          <div className='list'>
            <div className='item'>
              <div
                className='item-category'
                style={{ backgroundColor: "#CC0B04" }}
              >
                <img src={tShirt} alt='T-shirt' />
                <p className='item-text'>T-Shirt</p>
              </div>
            </div>
            <div className='item'>
              <div
                className='item-category'
                style={{ backgroundColor: "#1C3391" }}
              >
                <img src={shorts} alt='Shorts' />
                <p className='item-text'>Shorts</p>
              </div>
            </div>
            <div className='item'>
              <div
                className='item-category'
                style={{ backgroundColor: "#F67B02" }}
              >
                <img src={jacket} alt='Jacket' />
                <p className='item-text'>Jacket</p>
              </div>
            </div>
            <div className='item'>
              <div
                className='item-category'
                style={{ backgroundColor: "#E31F51" }}
              >
                <img src={pants} alt='Pants' />
                <p className='item-text'>Pants</p>
              </div>
            </div>
            <div className='item'>
              <div
                className='item-category'
                style={{ backgroundColor: "#57CD9E" }}
              >
                <img src={shoes} alt='Jacket' />
                <p className='item-text'>Shoes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
