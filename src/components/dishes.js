import React from "react";

const Dishes = props => (
  <ul>
    {props.category.map((dish, index) => {
      return (
        <li key={index}>
          <h2> {dish.name} </h2>
          <img src={dish.image} alt={dish.name} />
          <ul> {dish.ingredients.map((ingredient, index) => {
            return(
              <li key={index}>
                 {ingredient}
              </li>);
          })} </ul>
          <h3> Get it gluten free! </h3>
          <h4> Remove: </h4>
          <ul> {dish.glutenItems.map((ingredient, index) => {
            return(
              <li key={index}>
                 {ingredient}
              </li>);
          })} </ul>
        </li>
      );
    })}
  </ul>
);

export default Dishes;
