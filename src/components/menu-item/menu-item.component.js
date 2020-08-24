import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} home__menu_items`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='home__menu_backgroundImage'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='home__menu_items_content'>
        <h1 className='home__menu_items_content_title'>
          {title.toUpperCase()}
        </h1>
        <span className='home__menu_items_content_subtitle'>
          Shop Now
        </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
