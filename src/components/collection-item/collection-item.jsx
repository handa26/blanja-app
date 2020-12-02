import React from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";

import "../../styles/collection-item.css";

const CollectionItem = ({ img, name, brand, price, click, idUrl, rating }) => {
  return (
    <>
      <div className='item'>
        <div className='item-card' onClick={click}>
          <img src={img} alt={name} />
          <Link to={idUrl}>
            <div className='item-desc'>
              <p className='item-title'>{name}</p>
              <p className='item-price'>{price}</p>
              <span>{brand}</span>
              <Rating rating={rating} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CollectionItem;
