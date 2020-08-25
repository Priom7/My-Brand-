import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import "./brands.style.scss";

function Brands() {
  return (
    <div className='row'>
      <h2 className='row__title'>
        Available Brands{" "}
        <ChevronRightIcon></ChevronRightIcon>
        <ChevronRightIcon></ChevronRightIcon>
        <ChevronRightIcon></ChevronRightIcon>
      </h2>

      <div className='row_posters'>
        <img className='row_poster' src={brand1} alt='1' />
        <img className='row_poster' src={brand2} alt='2' />
        <img className='row_poster' src={brand3} alt='3' />
        <img className='row_poster' src={brand1} alt='4' />
        <img className='row_poster' src={brand2} alt='5' />
        <img className='row_poster' src={brand3} alt='6' />
        <img className='row_poster' src={brand1} alt='7' />
        <img className='row_poster' src={brand2} alt='8' />
        <img className='row_poster' src={brand3} alt='9' />
        <img className='row_poster' src={brand1} alt='10' />
        <img className='row_poster' src={brand2} alt='11' />
        <img className='row_poster' src={brand3} alt='12' />
        <img className='row_poster' src={brand1} alt='13' />
        <img className='row_poster' src={brand2} alt='14' />
        <img className='row_poster' src={brand3} alt='15' />
      </div>
    </div>
  );
}

export default Brands;
