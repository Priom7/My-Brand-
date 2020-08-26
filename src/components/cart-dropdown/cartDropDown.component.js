import React from "react";
import { connect } from "react-redux";
import "./cartDropDown.style.scss";
import CustomButton from "../button/customButton.component";
import CartItem from "../cart-item/cartItem.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cartDropDown'>
      <div className='cartDropDown__items'>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
          ></CartItem>
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
