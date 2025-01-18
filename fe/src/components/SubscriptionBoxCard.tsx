import React from "react";
import "../styles/components/SubscriptionBoxCard.scss";
import ButtonWithIcon from "./ButtonWithIcon";
import PrimaryButton from "./PrimaryButton";

interface ISubscriptionBoxCard {
  title: string;
  price: number;
  imgUrl: string;
  category: string;
  onClick: () => void;
}

const SubscriptionBoxCard = ({
  title,
  price,
  imgUrl,
  category,
  onClick,
}: ISubscriptionBoxCard) => {
  return (
    <div className="subscription-box-card-container" onClick={onClick}>
      <div className="subscription-box-image-container">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="subscription-box-card-text-container">
        <h3 className="subscription-box-card-title">{title}</h3>
        <p className="subscription-box-card-price">
          {price}{" "}
          <span className="subscription-box-card-euro-price">€ / piece</span>
        </p>
        <PrimaryButton buttonText="View box" />
      </div>
      <span className="subscription-box-card-category">{category}</span>
    </div>
  );
};

export default SubscriptionBoxCard;
