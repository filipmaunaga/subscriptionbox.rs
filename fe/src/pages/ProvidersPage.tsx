import React, { useState } from "react";
import Search from "../components/Search";
import ProviderCard from "../components/ProviderCard";
import { testCardData } from "../misc/testData";

const ProvidersPage = () => {
  const [filteredData, setFilteredData] = useState<
    {
      name: string;
      url: string;
    }[]
  >(testCardData);

  const handleSearch = (query: string) => {
    const filtered = testCardData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredData.map((card) => (
        <ProviderCard title={card.name} imageUrl={card.url} />
      ))}
    </div>
  );
};

export default ProvidersPage;
