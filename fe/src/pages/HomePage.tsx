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
      <SubscriptionBoxCard />
      <ProductCard />
      <CategoryLabel />
      <ProviderCard title="dm" imageUrl={testCardUrls[4]} />
      <ProviderCard title="apoteka" imageUrl={testCardUrls[3]} />
      <ProviderCard title="pet shop" imageUrl={testCardUrls[5]} />
    </>
  );
};

export default HomePage;
