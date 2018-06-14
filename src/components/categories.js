import React from "react";

const Categories = props => (
  <div>
    <label htmlFor="no-meat"> Vegeterian </label>
    <input
      className="checkbox"
      value="vegeterian"
      type="checkbox"
      name="vegeterian"
    />
    <label htmlFor="meat"> Meat Lovers </label>
    <input className="checkbox" value="meat" type="checkbox" name="meat" />

    <label htmlFor="gluten-free"> Gluten Free </label>
    <input
      className="checkbox"
      value="gluten-free"
      type="checkbox"
      name="gluten-free"
    />
    <label htmlFor="dairy-free">  Dairy Free</label>
    <input className="checkbox" value="dairy-free" type="checkbox" name="dairy-free" />
    
    <label htmlFor="vegan-free"> Vegan </label>
    <input
      className="checkbox"
      value="vegan"
      type="checkbox"
      name="vegan"
    />
  </div>
);

export default Categories;

/*
<Contains name="gluten"/>
            <Contains name="meat"/>
            <Contains name="dairy"/>
            <Contains name="egg"/>
*/