import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collection-items/collection-item.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview'>
      <h1 className='preview__title'>
        {title.toUpperCase()}
      </h1>
      <div className='preview__collection'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
            ></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
