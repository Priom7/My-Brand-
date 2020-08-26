import React from "react";
import "./customButton.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${
        isGoogleSignIn ? "google__signIn" : ""
      } customButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
