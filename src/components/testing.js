import React from "react";
import * as menu from "../menu";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
import GlutenFreeDishes from "./gluten-free-dishes";

export default class Testing extends React.Component {
  constructor() {
    super();
    this.state = {
      noMeat: [],
      noDairy: [],
      noEgg: [],
      noGluten: [],
      meat: [],
      display: "buttons"
    };
    this.food = [
      menu.fatpourBurger,
      menu.badgerBurger,
      menu.blackhawkBurger,
      menu.wings
    ];
  }

  foodFilter = () => {
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
      noMeat,
      noDairy,
      noEgg,
      noGluten,
      meat
    });
  };

  displayNoMeat = () => {
    this.setState({
      display: "no meat"
    });
  };
  displayMeat = () => {
    this.setState({
      display: "meat"
    });
  };
  displayNoGluten = () => {
    this.setState({
      display: "no gluten"
    });
  };

  render = () => {
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
        </div>
      );
    } else if (this.state.display === "no meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no meats: </h3>
          <Dishes category={this.state.noMeat} />

        </div>
      );
    } else if (this.state.display === "meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing meats: </h3>
          <Dishes category={this.state.meat} />

        </div>
      );
    } else if (this.state.display === "no gluten") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no gluten: </h3>
          <GlutenFreeDishes category={this.state.noGluten} />
        </div>
      );
    }
  }; //render
} //class
