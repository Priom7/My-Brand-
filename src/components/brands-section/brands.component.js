import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./brands.style.scss";
import BRAND_DATA from "../../ALL_DUMMY_DATA/brand.data";

class Brands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brands: BRAND_DATA,
    };
  }
  render() {
    const { brands } = this.state;
    return (
      <div className='row'>
        <h2 className='row__title'>
          Available Brands{" "}
          <ChevronRightIcon></ChevronRightIcon>
        </h2>
        <div className='row__posters'>
          {brands.map(({ id, imageUrl, name }) => (
            <img
              key={id}
              className='row__poster'
              src={imageUrl}
              alt={name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Brands;
