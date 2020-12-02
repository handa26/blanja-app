import React from "react";
import { Link } from "react-router-dom";

import "../../styles/cart/cart.css";

const Cart = () => {
  return (
    <Link to='/checkout' className='cart ml-auto'>
      <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </Link>
  );
};

export default Cart;