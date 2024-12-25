import React from "react";
import "../styles/components/CategoryLabel.scss";

interface ICategory {
  text: string;
  onClick: (text: string) => void;
  isSelected: boolean;
}

const CategoryLabel = ({ text, onClick, isSelected }: ICategory) => {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <div
      className={`category-label-container ${
        isSelected ? "selected-category" : ""
      }`}
      onClick={handleClick}
    >
      <p className="category-label-text">{text}</p>
    </div>
  );
};

export default CategoryLabel;
