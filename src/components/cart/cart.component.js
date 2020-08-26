import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./cart.style.scss";

const Cart = ({ toggleCartHidden }) => {
  return (
    <div className='cart' onClick={toggleCartHidden}>
      <ShoppingBasketIcon></ShoppingBasketIcon>
      <span className='cart_itemNumber'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(Cart);
