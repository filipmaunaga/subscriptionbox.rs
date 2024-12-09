import React, { useState } from "react";
import Search from "../components/Search";
import ProviderCard from "../components/ProviderCard";
import { testCardData } from "../misc/testData";
import Dropdown, { DropdownComponentProps } from "../components/Dropdown";
import "../styles/pages/ProvidersPage.scss";

const ProvidersPage = () => {
  const [filteredData, setFilteredData] = useState<
    {
      name: string;
      url: string;
    }[]
  >(testCardData);

  const [dropdownOptions, setDropdownOptions] = useState<
    { value: string; name: string }[]
  >([
    { value: "popular", name: "Most popular" },
    { value: "alphabetical", name: "Alphabetical" },
    { value: "recentlyAdded", name: "Recently added" },
  ]);

  const handleSearch = (query: string) => {
    const filtered = testCardData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="providers-page-container">
      <div className="providers-page-search-dropdown-container">
        <Search onSearch={handleSearch} />
        <Dropdown
          options={dropdownOptions}
          handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            console.log(e.target.value)
          }
        />
      </div>
      <div className="providers-container">
        {filteredData.map((card) => (
          <ProviderCard title={card.name} imageUrl={card.url} />
        ))}
      </div>
    </div>
  );
};

export default ProvidersPage;
