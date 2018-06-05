import React from "react";
import * as menu from "../menu";
import ButtonGroup from "./button-group";
import Dish from "./dish";

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

    console.log(this.state);
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

  onClick = () => {
    console.log("clicked!");
  };

  render = () => {
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            method1={this.foodFilter}
            method2={this.displayNoMeat}
            method3={this.displayMeat}
            method4={this.displayNoGluten}
          />
        </div>
      );
    }

    if (this.state.display === "no meat") {
      return (
        <div>
          <ButtonGroup
            method1={this.foodFilter}
            method2={this.displayNoMeat}
            method3={this.displayMeat}
            method4={this.displayNoGluten}
          />
          <h3> Showing no meats: </h3>
          <Dish category={this.state.noMeat} />
        </div>
      );
    }

    if (this.state.display === "meat") {
      return (
        <div>
          <ButtonGroup
            method1={this.foodFilter}
            method2={this.displayNoMeat}
            method3={this.displayMeat}
            method4={this.displayNoGluten}
          />
          <h3> Showing meats: </h3>
          <Dish category={this.state.meat} />
        </div>
      );
    }

    if (this.state.display === "no gluten") {
      return (
        <div>
          <ButtonGroup
            method1={this.foodFilter}
            method2={this.displayNoMeat}
            method3={this.displayMeat}
            method4={this.displayNoGluten}
          />
          <h3> Showing no gluten: </h3>
          <Dish category={this.state.noGluten} />
        </div>
      );
    }
  }; //render
} //class
