import React from "react";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import ProductCard from "../components/ProductCard";
import CategoryLabel from "../components/CategoryLabel";
import ProviderCard from "../components/ProviderCard";
import { testCardUrls } from "../misc/testData";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome to subscriptionbox.rs!</h1>
        <h2>Browse your favorite stores and subscribe today!</h2>
      </div>
      <div>
        Trending boxes
        <SubscriptionBoxCard
          title="aa"
          price={20.21}
          imgUrl={testCardUrls[2]}
        />
        <SubscriptionBoxCard
          title="aa"
          price={20.21}
          imgUrl={testCardUrls[0]}
        />
      </div>
      <div>
        Trending providers
        <ProviderCard title="dm" imageUrl={testCardUrls[4]} category="random" />
        <ProviderCard
          title="apoteka"
          imageUrl={testCardUrls[3]}
          category="random"
        />
        <ProviderCard
          title="pet shop"
          imageUrl={testCardUrls[5]}
          category="random"
        />
      </div>
    </>
  );
};

export default HomePage;
