import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";
import "./collection-item.style.scss";
import CustomButton from "../button/customButton.component";
const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection'>
      <div
        className='collection__image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='collection__footer'>
        <span className='collection__name'>{name}</span>
        <span className='collection__price'>{price}</span>
      </div>
      <div className='custom__button'>
        <CustomButton
          onClick={() => addItemToCart(item)}
          inverted
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
