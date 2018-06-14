import React from "react";

const Categories = props => (
  <div>
    <label htmlFor="no-meat"> No meat </label>
    <input
      className="checkbox"
      value="no-meat"
      type="checkbox"
      name="no-meat"
    />
    <label htmlFor="meat"> Meat </label>
    <input className="checkbox" value="meat" type="checkbox" name="meat" />
    <label htmlFor="gluten-free"> Gluten-free </label>
    <input
      className="checkbox"
      value="gluten-free"
      type="checkbox"
      name="gluten-free"
    />
  </div>
);

export default Categories;
