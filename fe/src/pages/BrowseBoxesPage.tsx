import React, { useEffect, useState } from "react";
import { ISubscriptionBox, mockBackendData } from "../misc/testData";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import CategoryLabel from "../components/CategoryLabel";
import SubscriptionBoxCard from "../components/SubscriptionBoxCard";
import "../styles/pages/BrowseBoxesPage.scss";
import { useNavigate } from "react-router-dom";

const BrowseBoxesPage = () => {
  const subscriptionBoxes = mockBackendData.flatMap(
    (provider) => provider.providerSubscriptionboxes
  );
  const navigate = useNavigate();
  const [filteredData, setFilteredData] =
    useState<ISubscriptionBox[]>(subscriptionBoxes);
  const uniqueCategories: string[] = [
    ...new Set(subscriptionBoxes.map((item) => item.boxCategory)),
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
    const filtered = subscriptionBoxes.filter((box) => {
      const matchesSearch = box.boxName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? box.boxCategory.toLowerCase() === selectedCategory.toLowerCase() // Match exact category
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
    <div className="boxes-page-container">
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
      <div className="boxes-container">
        {filteredData.map((card) => (
          <SubscriptionBoxCard
            key={card.boxId}
            title={card.boxName}
            price={card.boxPrice}
            imgUrl={card.boxImgUrl}
            category={card.boxCategory}
            onClick={() => navigate(`/subscriptionbox/${card.boxId}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseBoxesPage;
