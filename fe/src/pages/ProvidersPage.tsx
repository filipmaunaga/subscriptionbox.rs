import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ProviderCard from "../components/ProviderCard";
import { IProvider, mockBackendData } from "../misc/testData";
import Dropdown, { DropdownComponentProps } from "../components/Dropdown";
import "../styles/pages/ProvidersPage.scss";
import CategoryLabel from "../components/CategoryLabel";

const ProvidersPage = () => {
  const [filteredData, setFilteredData] =
    useState<IProvider[]>(mockBackendData);
  const uniqueCategories: string[] = [
    ...new Set(mockBackendData.map((provider) => provider.providerCategory)),
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const isCategorySelected = (categoryText: string) =>
    selectedCategory === categoryText;

  const [dropdownOptions, setDropdownOptions] = useState<
    { value: string; name: string }[]
  >([
    { value: "popular", name: "Most popular" },
    { value: "alphabetical", name: "Alphabetical" },
    { value: "recentlyAdded", name: "Recently added" },
  ]);

  const filterData = (): void => {
    const filtered = mockBackendData.filter((provider) => {
      const matchesSearch = provider.providerName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? provider.providerCategory.toLowerCase() ===
          selectedCategory.toLowerCase() // Match exact category
        : true; // No category filter applied

      return matchesSearch && matchesCategory; // Both conditions must be true
    });

    setFilteredData(filtered);
  };

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handle category selection
  const handleCategoryFiltering = (categoryText: string) => {
    // Toggle the selected category
    setSelectedCategory(
      (prevCategory) => (prevCategory === categoryText ? "" : categoryText) // Reset if clicked again
    );
  };
  // Re-apply filters whenever state changes
  useEffect(() => {
    filterData();
  }, [searchQuery, selectedCategory]);

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
        <div className="subscriptionbox-categories-container">
          {uniqueCategories.map((category) => (
            <CategoryLabel
              key={category}
              text={category}
              onClick={handleCategoryFiltering}
              isSelected={isCategorySelected(category)}
            />
          ))}
        </div>
      </div>
      <div className="providers-container">
        {filteredData.map((card) => (
          <ProviderCard
            key={card.providerId}
            id={card.providerId}
            title={card.providerName}
            imageUrl={card.providerImgUrl}
            category={card.providerCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default ProvidersPage;
