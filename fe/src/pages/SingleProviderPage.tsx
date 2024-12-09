import React, { useState } from "react";
import "../styles/pages/SingleProviderPage.scss";
import { subscriptionBoxTestData } from "../misc/testData";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import RequestBox from "../components/RequestBox";

const SingleProviderPage = () => {
  return (
    <div className="provider-page-container">
      {subscriptionBoxTestData.map((box) => (
        <SubscriptionBoxCard
          title={box.name}
          price={box.price}
          imgUrl={box.imgUrl}
        />
      ))}
      <RequestBox />
    </div>
  );
};

export default SingleProviderPage;
