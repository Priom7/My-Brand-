import React from "react";
import "./shop.style.scss";
import SHOP_DATA from "../../ALL_DUMMY_DATA/shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop'>
        {collections.map(
          ({ id, ...otherCollectionProps }) => (
            <PreviewCollection
              key={id}
              {...otherCollectionProps}
            ></PreviewCollection>
          )
        )}
      </div>
    );
  }
}

export default Shop;
