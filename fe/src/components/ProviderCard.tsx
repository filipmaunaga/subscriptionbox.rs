import React from "react";
import "../styles/components/ProviderCard.scss";
import { testCardUrls } from "../misc/testData";
import { useNavigate } from "react-router-dom";

interface IProvider {
  title: string;
  imageUrl: string;
}

const ProviderCard = ({ title, imageUrl }: IProvider) => {
  const navigate = useNavigate();
  return (
    <div
      className="provider-card-container"
      onClick={() => navigate(`/providers/${title}`)}
    >
      <img src={imageUrl} alt="provider" />
      <p className="provider-card-title">{title}</p>
    </div>
  );
};

export default ProviderCard;
