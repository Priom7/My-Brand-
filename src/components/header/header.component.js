import React from "react";
import { Link } from "react-router-dom";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import BusinessIcon from "@material-ui/icons/Business";
import StoreIcon from "@material-ui/icons/Store";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import "./header.style.scss";

const Header = () => {
  return (
    <div className='header'>
      <Link className='header__logoContainer' to='/'>
        <div className='header__logo'>
          <BusinessIcon></BusinessIcon>{" "}
          <span>My Brand</span>
        </div>
      </Link>
      <div className='header__options'>
        <div className='header__search'>
          <FindInPageIcon></FindInPageIcon>
          <input placeholder='Type in to search...'></input>
        </div>
        <Link className='header__option' to='/shop'>
          <StoreIcon></StoreIcon> <span>Shop</span>
        </Link>
        <Link className='header__option' to='/contact'>
          <ContactSupportIcon></ContactSupportIcon>{" "}
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
