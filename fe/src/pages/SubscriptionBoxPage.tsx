import React from "react";
import "../styles/pages/SubscriptionBoxPage.scss";
import { testCardUrls } from "../misc/testData";
import ProductCard from "../components/ProductCard";

const SubscriptionBoxPage = () => {
  return (
    <>
      <div className="subscriptionbox-page-image-container">
        <img src={testCardUrls[0]} />
      </div>
      <div className="subscriptionbox-content-container">
        <h2 className="subscriptionbox-content-title">
          Vegetables are healthy for you
        </h2>
        <p className="subscriptionbox-content-price">
          24.12 <span className="subscriptionbox-content-price-tag">€</span>
        </p>
        <p className="list-of-products-title">Products included</p>
        <div className="subscriptionbox-products-container ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <p className="description-text">
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </p>
      </div>
    </>
  );
};

export default SubscriptionBoxPage;
