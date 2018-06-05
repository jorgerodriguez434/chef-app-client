import React from "react";
import * as menu from "../menu";

export default class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      foodFilters: []
    };
    this.food = [menu.fatpourBurger, menu.badgerBurger, menu.blackhawkBurger];
  }

  foodFilter = event => {
    const checkbox = event.currentTarget;
    const foodFilters = [];
    if (checkbox.checked) {
      foodFilters.push(checkbox.value);
    }
    console.log("food filters " + foodFilters);
    this.setState({
      foodFilters
    });
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
    //create a no meat filter
    console.log(`render ${this.state.foodFilters}`);
    return (
      <div>
        <h2> This is the Checkboxes component</h2>
        <label htmlFor="no-meat"> No meat </label>
        <input
          className="no-meat"
          value="no-meat"
          type="checkbox"
          name="no-meat"
          onChange={this.foodFilter}
        />
        <label htmlFor="meat"> Meat</label>
        <input
          className="meat"
          value="meat"
          type="checkbox"
          name="meat"
          onChange={this.foodFilter}
        />
        <label htmlFor="gluten-free"> Gluten Free</label>
        <input
          className="gluten-free"
          value="gluten-free"
          type="checkbox"
          name="gluten-free"
          onChange={this.foodFilter}
        />
        <ul />
      </div>
    );
  };
}
