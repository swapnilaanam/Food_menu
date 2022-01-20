import React from "react";

const Categories = ({ categories, filterCategory }) => {
  return (
    <article className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </article>
  );
};

export default Categories;
