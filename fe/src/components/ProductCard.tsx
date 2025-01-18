import React from "react";
import "../styles/components/ProductCard.scss";

interface IProductCard {
  name: string;
  imgUrl: string;
}

const ProductCard = ({ name, imgUrl }: IProductCard) => {
  return (
    <div className="product-card-container">
      <img src={imgUrl} alt="product" />
      <div className="product-card-text-container">
        <p className="product-card-title">{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
