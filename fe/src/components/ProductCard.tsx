import React from "react";
import "../styles/components/ProductCard.scss";
import { testCardUrls } from "../misc/testData";
import ButtonWithIcon from "./ButtonWithIcon";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img src={testCardUrls[2]} alt="product" />
      <div className="product-card-text-container">
        <p className="product-card-title">
          Some random product dasdjsaj fin rewijdis3948 fdsds
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
