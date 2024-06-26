import React from "react";
import "../styles/components/SubscriptionBoxCard.scss";
import { testCardUrls } from "../misc/testData";
import ButtonWithIcon from "./ButtonWithIcon";

const SubscriptionBoxCard = () => {
  return (
    <div className="subscription-box-card-container">
      <div className="subscription-box-image-container">
        <img src={testCardUrls[0]} alt="product" />
      </div>
      <div className="subscription-box-card-text-container">
        <h3 className="subscription-box-card-title">Vegetables</h3>
        <p className="subscription-box-card-price">
          20.12{" "}
          <span className="subscription-box-card-euro-price">€ / piece</span>
        </p>
        <ButtonWithIcon />
      </div>
    </div>
  );
};

export default SubscriptionBoxCard;
