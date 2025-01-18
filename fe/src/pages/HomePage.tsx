import React from "react";
import "../styles/pages/HomePage.scss";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import ProviderCard from "../components/ProviderCard";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="heading-container">
        <h1 className="welcome-text">
          Welcome to <br />
          subscriptionbox.rs!
        </h1>
        <h2>Browse your favorite stores and subscribe today!</h2>
      </div>
      <div className="trending-boxes-container">
        <p className="trending-boxes-text">Trending boxes</p>
      </div>
      <div className="trending-boxes-container">
        <p className="trending-boxes-text">Trending providers</p>
        <div className="subscriptionbox-products-container"></div>
        <PrimaryButton
          buttonText="See All Providers"
          onClick={() => navigate("/providers")}
        />
      </div>
      <div className="need-help-container">
        <h2 className="need-help-heading">Need help?</h2>
        <h3 className="need-help-text">
          <span className="need-help-link" onClick={() => navigate("/faq")}>
            Click here
          </span>{" "}
          to read how subscriptionbox.rs works.
        </h3>
      </div>
    </>
  );
};

export default HomePage;
