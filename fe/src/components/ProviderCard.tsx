import React from "react";
import "../styles/components/ProviderCard.scss";
import { testCardUrls } from "../misc/testData";
import { useNavigate } from "react-router-dom";

interface IProvider {
  title: string;
  imageUrl: string;
  category: string;
}

const ProviderCard = ({ title, imageUrl, category }: IProvider) => {
  const navigate = useNavigate();
  return (
    <div
      className="provider-card-container"
      onClick={() => navigate(`/providers/${title}`)}
    >
      <img src={imageUrl} alt="provider" />
      <p className="provider-card-title">{title}</p>
      <span className="provider-card-category">{category}</span>
    </div>
  );
};

export default ProviderCard;
