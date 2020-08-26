import React from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import BusinessIcon from "@material-ui/icons/Business";
import StoreIcon from "@material-ui/icons/Store";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import "./header.style.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cartDropDown.component";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser ? (
          <div
            className='header__option'
            onClick={() => auth.signOut()}
          >
            <ExitToAppIcon></ExitToAppIcon>
            <span>SignOut</span>
          </div>
        ) : (
          <Link className='header__option' to='/auth'>
            <ContactMailIcon></ContactMailIcon>{" "}
            <span>SignUp</span>
          </Link>
        )}
        <Cart></Cart>
      </div>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
