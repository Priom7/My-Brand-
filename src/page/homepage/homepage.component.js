import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/banner.component";
import CustomerCount from "../../components/customerCount/customerCount.component";
import Brands from "../../components/brands-section/brands.component";

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home__banner'>
        <Banner></Banner>
      </div>
      <div className='home__customerCount'>
        <CustomerCount></CustomerCount>
      </div>
      <div className='home__directory'>
        <Directory></Directory>
      </div>
      <div className='home__brands'>
        <Brands></Brands>
      </div>
    </div>
  );
};

export default HomePage;
