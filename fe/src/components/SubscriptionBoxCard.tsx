import React from "react";
import "../styles/components/SubscriptionBoxCard.scss";
import { testCardUrls } from "../misc/testData";
import ButtonWithIcon from "./ButtonWithIcon";

interface ISubscriptionBoxCard {
  title: string;
  price: number;
  imgUrl: string;
}

const SubscriptionBoxCard = ({
  title,
  price,
  imgUrl,
}: ISubscriptionBoxCard) => {
  return (
    <div className="subscription-box-card-container">
      <div className="subscription-box-image-container">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="subscription-box-card-text-container">
        <h3 className="subscription-box-card-title">{title}</h3>
        <p className="subscription-box-card-price">
          {price}{" "}
          <span className="subscription-box-card-euro-price">€ / piece</span>
        </p>
        <ButtonWithIcon />
      </div>
    </div>
  );
};

export default SubscriptionBoxCard;
