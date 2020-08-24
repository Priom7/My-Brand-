import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

const Header = () => {
  return (
    <div className='header'>
      <Link className='header__logoContainer' to='/'>
        <div className='header__logo'>My Brand</div>
      </Link>
      <div className='header__options'>
        <Link className='header__option' to='/shop'>
          Shop
        </Link>
        <Link className='header__option' to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
