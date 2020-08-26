import React from "react";
import "./banner.component.scss";
import BANNER_DATA from "./banner.data";

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: BANNER_DATA,
    };
  }
  render() {
    const { banners } = this.state;
    return (
      <div>
        {banners.map(
          ({ id, imageUrl, title, description }) => (
            <header
              key={id}
              className='banner'
              style={{
                backgroundSize: "cover",
                backgroundImage: `url("${imageUrl}")`,
                backgroundPosition: "center center",
              }}
            >
              <div className='banner_contents'>
                <h1 className='banner_title'>{title}</h1>

                <h1 className='banner_description'>
                  {description}
                </h1>
              </div>
              <div className='banner_fadeBottom'></div>
            </header>
          )
        )}
      </div>
    );
  }
}

export default Banner;
