import React from "react";
import "../styles/components/ProviderCard.scss";
import { testCardUrls } from "../misc/testData";

interface IProvider {
  title: string;
  imageUrl: string;
}

const ProviderCard = ({ title, imageUrl }: IProvider) => {
  return (
    <div className="provider-card-container">
      <img src={imageUrl} alt="provider" />
      <p className="provider-card-title">{title}</p>
    </div>
  );
};

export default ProviderCard;
