import React from "react";
import * as menu from "../menu";
import Burger from "./burger";

export default class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      foodFilters: []
    };
    this.food = [menu.fatpourBurger, menu.badgerBurger, menu.blackhawkBurger];
  }

  foodFilter = event => {
    const checkboxes = event.currentTarget.getElementsByTagName("input");
    const foodFilters = [];
    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        foodFilters.push(checkbox.value);
      }
      return checkbox;
    });
    this.setState({ foodFilters });
  };

  noMeatFilter = () => {
    const foodItems = this.food.filter(dish => dish.hasMeat === false);
    console.log(foodItems);
    return foodItems;
  };
  noDairyFilter = () => {
    const foodItems = this.food.filter(dish => dish.hasDairy === false);
    console.log(foodItems);
    return foodItems;
  };
  noEggFilter = () => {
    const foodItems = this.food.filter(dish => dish.hasEgg === false);
    console.log(foodItems);
    return foodItems;
  };
  noGlutenFilter = () => {
    const foodItems = this.food.filter(dish => dish.hasGluten === false);
    console.log(foodItems);
    return foodItems;
  };

  render = () => {
  const noMeatItems=  this.noMeatFilter();
    return (
      <div>
        <h2> This is the Checkboxes component</h2>
        <form onChange={this.foodFilter}>
          <label htmlFor="no-meat"> No meat </label>
          <input
            className="no-meat"
            value="no-meat"
            type="checkbox"
            name="no-meat"
          />
          <label htmlFor="meat"> Meat</label>
          <input className="meat" value="meat" type="checkbox" name="meat" />
          <label htmlFor="gluten-free"> Gluten Free</label>
          <input
            className="gluten-free"
            value="gluten-free"
            type="checkbox"
            name="gluten-free"
          />
        </form>
        <ul>
          {noMeatItems.map((dish, index) => {
            return (
                <li key={index}>
                  <Burger name={dish.name} image={dish.image} />
                </li>
              );
          })}
        </ul>
      </div>
    );
  };
}
