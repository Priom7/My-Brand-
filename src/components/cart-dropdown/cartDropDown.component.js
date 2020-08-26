import React from "react";
import "./cartDropDown.style.scss";
import CustomButton from "../button/customButton.component";

const CartDropDown = () => {
  return (
    <div className='cartDropDown'>
      <div className='cartDropDown__items'>
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
