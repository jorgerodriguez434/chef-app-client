import React from "react";
//import * as menu from "../menu";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
//import GlutenFreeDishes from "./gluten-free-dishes";
import { API_BASE_URL } from "../config";
//import Ingredients from "./ingredients";

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
      display: "buttons"
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

  foodFilter = () => {

    console.log("food filter clicked")
    const noMeatDishes = [];
    const noDairyDishes = [];
    const noEggDishes = [];
    const noGlutenDishes = [];
    const meatDishes = [];
    const dairyDishes = [];
    const eggDishes = [];
    const glutenDishes = [];
   // const vegan = [];

    this.state.menu.map(dish => {
      if (dish.categories.indexOf("contains-meat") !== -1) meatDishes.push(dish);
      else if(dish.categories.indexOf("contains-meat") === -1) noMeatDishes.push(dish);
      if (dish.categories.indexOf("contains-gluten") !== -1) glutenDishes.push(dish);
      else if(dish.categories.indexOf("contains-gluten") === -1) noGlutenDishes.push(dish)
      if (dish.categories.indexOf("contains-dairy") !== -1) dairyDishes.push(dish);
      else if (dish.categories.indexOf("contains-dairy") === -1) noDairyDishes.push(dish);
      if (dish.categories.indexOf("contains-egg") !== -1) eggDishes.push(dish);
      else if (dish.categories.indexOf("contains-egg") === -1) noEggDishes.push(dish); 

      return dish;
    }); 

    this.setState({
          noMeatDishes,
          noDairyDishes,
          noEggDishes,
          noGlutenDishes,
          meatDishes,
          dairyDishes,
          eggDishes,
          glutenDishes
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

  displayNoEgg = () => {
    this.setState({
      display: "no egg"
    });
  };

  displayNoDairy = () => {
    this.setState({
      display: "no dairy"
    });
  };

  render = () => {
    console.log("displaying:");
    console.log(this.state.display);
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoEgg = {this.displayNoEgg}
            displayNoDairy = {this.displayNoDairy}
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
            displayNoEgg = {this.displayNoEgg}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
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
            displayNoEgg = {this.displayNoEgg}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
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
            displayNoEgg = {this.displayNoEgg}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no gluten: </h3>
          <Dishes category={this.state.noGlutenDishes} />
        </div>
      );
    } //else if
    else if (this.state.display === "no egg") {
      return (
        <div>
           <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoEgg = {this.displayNoEgg}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no egg: </h3>
          <Dishes category={this.state.noEggDishes} />
         
        </div>
      );
    }//else if
    else if (this.state.display === "no dairy") {
      return (
        <div>
          <ButtonGroup
           foodFilter={this.foodFilter}
           displayNoEgg = {this.displayNoEgg}
           displayNoDairy = {this.displayNoDairy}
           displayNoMeat={this.displayNoMeat}
           displayMeat={this.displayMeat}
           displayNoGluten={this.displayNoGluten}
           
          />
          <h3> Showing no dairy: </h3>
          <Dishes category={this.state.noDairyDishes} />
         
        </div>
      );
    }//else if
  }; //render
} //class
