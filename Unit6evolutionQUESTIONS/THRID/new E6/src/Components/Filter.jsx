import React, { useState } from "react";

const Filter = ({ onChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    const updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      // Remove category if it's already selected
      const index = updatedCategories.indexOf(category);
      updatedCategories.splice(index, 1);
    } else {
      // Add category if it's not selected
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
    onChange(updatedCategories);
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            onChange={() => handleCheckboxChange("Analog")}
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Digital"
            onChange={() => handleCheckboxChange("Digital")}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Chronograph"
            onChange={() => handleCheckboxChange("Chronograph")}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
