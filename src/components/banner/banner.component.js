import React from "react";
import "./banner.component.scss";

function Banner() {
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437_1280.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          Welcome To My Brand Online Super Shop
        </h1>

        <h1 className='banner_description'>
          We promise to make things easier, faster and
          comfortable for you.
        </h1>
      </div>
      <div className='banner_fadeBottom'></div>
    </header>
  );
}

export default Banner;
