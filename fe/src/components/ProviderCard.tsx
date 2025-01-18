import React from "react";
import "../styles/components/ProviderCard.scss";
import { useNavigate } from "react-router-dom";

interface IProvider {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

const ProviderCard = ({ id, title, imageUrl, category }: IProvider) => {
  const navigate = useNavigate();
  return (
    <div
      className="provider-card-container"
      onClick={() => navigate(`/providers/${id}`)}
    >
      <img src={imageUrl} alt="provider" />
      <p className="provider-card-title">{title}</p>
      <span className="provider-card-category">{category}</span>
    </div>
  );
};

export default ProviderCard;
