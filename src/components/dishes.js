import React from "react";
import Ingredients from "./ingredients";
const Dishes = props => (
  <ul>
    {props.category.map((dish, index) => {
      return (
        <li key={index} className="dish">
          <h2> {dish.name} </h2>
          <img src={dish.image} alt={dish.name}  />
          <Ingredients ingredients={dish.ingredients}/>
          <h3> Get it gluten free! </h3>
          <h4> Remove: </h4>
          <Ingredients ingredients={dish.glutenItems}/>
        </li>
      );
    })}
  </ul>
);

export default Dishes;
