import React from "react";
import * as menu from "../menu";
//import Burger from "./burger";

export default class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      foodFilters: []
    };
    this.food = [menu.fatpourBurger, menu.badgerBurger, menu.blackhawkBurger, menu.wings];
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

  render = () => {
    console.log(this.state.foodFilters)
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
          <label htmlFor="no-gluten"> No gluten</label>
          <input
            className="no-gluten"
            value="no-gluten"
            type="checkbox"
            name="no-gluten"
          />
        </form>
        <ul>

          {this.food
            .filter(dish =>this.state.foodFilters.indexOf(dish.category) >= 0)
            /*
            filter creates a new array with all elements that pass the test
            implemented by the provided function.
            Return the dishes that return >= 0 of index "no-meat" || "meat" || "no-gluten"
            from foodFilters array

            filter callback:
            Function is a predicate, to test each element of the array.
            Return true to keep the element, false otherwise
            */
            .map((filtered, index) => {
              return (
                <li key={index}>
                <h2> {filtered.name} </h2>
                 <img src={filtered.image} alt={filtered.name}/>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };
}
