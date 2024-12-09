import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Dropdown.scss";

export interface DropdownComponentProps {
  options: { value: string; name: string }[];
  handleChange: (option: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownComponentProps> = ({
  options,
  handleChange,
}) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">
        <FontAwesomeIcon icon={faChevronRight} /> Sort by:
      </label>
      <select name="options" onChange={handleChange} className="selection">
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
