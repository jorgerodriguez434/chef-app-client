import React from "react";
import * as menu from "../menu";

export default class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      noMeat: [],
      noDairy:[],
      noGluton:[],
      noEgg:[]
    };
    this.food = [menu.fatpourBurger, menu.badgerBurger, menu.blackhawkBurger];
  }

/*  foodFilter = event => {
    const checkbox = event.currentTarget;
    if (checkbox.checked) {
      this.setState({
        foodFilters: [...this.state.foodFilters, checkbox.value]
      });
    }

  }; */


  foodFilter (dish) {
    this.setState({
      noMeat: [...this.state.noMeat, "majin boo"]
    });

  }

  render = () => {
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
        <ul>{this.food.filter(dish => {
          let noMeatItems = []
                if (dish.hasMeat === false){
                  noMeatItems.push(dish);
                
                }
            console.log(noMeatItems)


        })}</ul>
      </div>
    );
  };
}
