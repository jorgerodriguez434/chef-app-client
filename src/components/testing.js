import React from "react";
import * as menu from "../menu";

export default class Testing extends React.Component {
  constructor() {
    super();
    this.state = {
      noMeat: [],
      noDairy: [],
      noEgg: [],
      noGluten: [],
      meat: []
    };
    this.food = [menu.fatpourBurger, menu.badgerBurger, menu.blackhawkBurger, menu.wings];
  }

  filterFood = () => {

    const noMeat = [];
    const noDairy = [];
    const noEgg = [];
    const noGluten = [];
    const meat = [];
    this.food.map(dish => {
      if (dish.hasMeat === false) {
            noMeat.push(dish);
      }
      if (dish.hasDairy === false) {
        noDairy.push(dish);
      }
      if (dish.hasEgg === false) {
        noEgg.push(dish);
      }
      if (dish.hasGluten === false) {
        noGluten.push(dish);
      }
      if (dish.hasMeat === true) {
        meat.push(dish);
      }
      return dish;
    });


    this.setState({
      noMeat: [...this.state.noMeat, ...noMeat],
      noDairy: [...this.state.noDairy, ...noDairy],
      noEgg: [...this.state.noEgg, ...noEgg],
      noGluten: [...this.state.noGluten, ...noGluten],
      meat: [...this.state.meat, ...meat]
    });

  };

  render = () => {

    console.log(this.state);
    return (
      <div>
        <h2> Hello there </h2>
        <p> filter the menu </p>
        <p> okay here I go! </p>
        <button type="submit" onClick={this.filterFood}> display </button>
      </div>
    );
  };
}
