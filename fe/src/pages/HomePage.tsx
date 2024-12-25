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
      <ProductCard />
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
    </>
  );
};

export default HomePage;
