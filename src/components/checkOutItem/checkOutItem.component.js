import React from "react";
import "./checkOutItem.style.scss";

const CheckOutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className='checkOutItem'>
      <div className='checkOutItem__image'>
        <img src={imageUrl} alt='item'></img>
      </div>
      <span className='checkOutItem__name'>{name}</span>
      <span className='checkOutItem__quantity'>
        {quantity}
      </span>
      <span className='checkOutItem__price'>{price}</span>
      <div className='checkOutItem__remove'>&#10006;</div>
    </div>
  );
};

export default CheckOutItem;
