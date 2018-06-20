import React from "react";
//import * as menu from "../menu";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
//import GlutenFreeDishes from "./gluten-free-dishes";
import { API_BASE_URL } from "../config";
import Ingredients from "./ingredients";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      menu: [],
      noMeatDishes: [],
      noDairyDishes: [],
      noEggDishes: [],
      noGlutenDishes: [],
      meatDishes: [],
      display: "buttons",
     /* allIngredients: [],
      glutenFreeIngredients: [],
      meatFreeIngredients: [],
      dairyFreeIngredients: [],
      eggFreeIngredients: [],
      meatIngredients: [] */
    };
  }

  componentDidMount() {
    fetch(API_BASE_URL)
      .then(res => res.json())
      .then(
        dishes => {
          console.log(dishes);
          this.setState({
            isLoaded: true,
            menu: dishes
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  categorizeIngredients = () => {
    //
  };


  foodFilter = () => {
    const noMeatDishes = [];
    const noDairyDishes = [];
    const noEggDishes = [];
    const noGlutenDishes = [];
    const meatDishes = [];
    const dairyDishes = [];
    const eggDishes = [];
    const glutenDishes = [];

    this.state.menu.map(dish => {
      
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
  displayIngredients = () => {
    this.setState({
      display: "ingredients"
    });
  };

  render = () => {
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            categorizeIngredients={this.categorizeIngredients}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
            displayIngredients={this.displayIngredients}
          />
        </div>
      );
    } else if (this.state.display === "no meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            categorizeIngredients={this.categorizeIngredients}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
            displayIngredients={this.displayIngredients}
          />
          <h3> Showing no meats: </h3>
          <Dishes category={this.state.noMeatDishes} />
        </div>
      );
    } else if (this.state.display === "meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            categorizeIngredients={this.categorizeIngredients}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
            displayIngredients={this.displayIngredients}
          />
          <h3> Showing meats: </h3>
          <Dishes category={this.state.meatDishes} />
        </div>
      );
    } else if (this.state.display === "no gluten") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            categorizeIngredients={this.categorizeIngredients}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
            displayIngredients={this.displayIngredients}
          />
          <h3> Showing no gluten: </h3>
          <Dishes category={this.state.noGlutenDishes} />
        </div>
      );
    } //else if
    else if (this.state.display === "ingredients") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            categorizeIngredients={this.categorizeIngredients}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
            displayIngredients={this.displayIngredients}
          />
          <h3> Showing all ingredients: </h3>
          <Ingredients ingredients={this.state.allIngredients} />
        </div>
      );
    }
  }; //render
} //class
