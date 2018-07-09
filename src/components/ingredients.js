import React from "react";

const Ingredients = props => (
  <ul> {props.ingredients.map((ingredient, index) => {
    return(
      <li key={index}>
         {ingredient}
      </li>);
  })} </ul>
);

export default Ingredients;