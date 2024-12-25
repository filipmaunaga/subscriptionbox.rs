import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ProviderCard from "../components/ProviderCard";
import { testCardData } from "../misc/testData";
import Dropdown, { DropdownComponentProps } from "../components/Dropdown";
import "../styles/pages/ProvidersPage.scss";
import CategoryLabel from "../components/CategoryLabel";

const ProvidersPage = () => {
  const [filteredData, setFilteredData] = useState<
    {
      name: string;
      url: string;
      category: string;
    }[]
  >(testCardData);
  const uniqueCategories: string[] = [
    ...new Set(testCardData.map((item) => item.category)),
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
    const filtered = testCardData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? product.category.toLowerCase() === selectedCategory.toLowerCase() // Match exact category
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
            title={card.name}
            imageUrl={card.url}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProvidersPage;
