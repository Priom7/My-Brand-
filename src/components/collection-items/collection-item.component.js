import React from "react";
import "./collection-item.style.scss";
const CollectionItem = ({ id, name, price, imageUrl }) => {
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
    </div>
  );
};

export default CollectionItem;
