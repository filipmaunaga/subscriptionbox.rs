import React from "react";
import "../styles/components/ButtonWithIcon.scss";

const ButtonWithIcon = () => {
  return (
    <button className="button-with-icon ">
      <img src="/icons/shopping-cart.svg" alt="shopping cart" />
      <p className="button-with-icon-text">Add to cart</p>
    </button>
  );
};

export default ButtonWithIcon;
