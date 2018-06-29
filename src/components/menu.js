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
      veganDishes: [],
      display: "buttons"
    };
  }

  componentDidMount() {
    fetch(API_BASE_URL)
      .then(res => res.json())
      .then(
        dishes => {
         // console.log(dishes);
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
      ).then(() => this.foodFilter());
  }

  foodFilter = () => {
    
    const noMeatDishes = [];
    const noDairyDishes = [];
    const noEggDishes = [];
    const noGlutenDishes = [];
    const meatDishes = [];
    const dairyDishes = [];
    const eggDishes = [];
    const glutenDishes = [];
    const veganDishes = [];

    this.state.menu.map(dish => {
      if (dish.categories.indexOf("contains-meat") !== -1) meatDishes.push(dish);
      //dispatch add meat dish
      else if(dish.categories.indexOf("contains-meat") === -1) noMeatDishes.push(dish);
      //dispatch add no meat dish
      if (dish.categories.indexOf("contains-gluten") !== -1) glutenDishes.push(dish);
      //dispatch add gluten dishes
      else if(dish.categories.indexOf("contains-gluten") === -1) noGlutenDishes.push(dish)
       //dispatch add no gluten dishes
      if (dish.categories.indexOf("contains-dairy") !== -1) dairyDishes.push(dish);
       //dispatch dairy dishes
      else if (dish.categories.indexOf("contains-dairy") === -1) noDairyDishes.push(dish);
       //dispatch no dairy dishes
      if (dish.categories.indexOf("contains-egg") !== -1) eggDishes.push(dish);
       //dispatch egg gluten dishes
      else if (dish.categories.indexOf("contains-egg") === -1) noEggDishes.push(dish); 
       //dispatch no egg dishes
      if (dish.categories.indexOf("contains-egg") === -1 && dish.categories.indexOf("contains-dairy") === -1 && dish.categories.indexOf("contains-meat") === -1 ) veganDishes.push(dish);

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
          glutenDishes,
          veganDishes
    });  
      
  };


  displayNoMeat = () => {
    this.setState({
      display: "no meat"
    });
    console.log("no meat:");
    console.log(this.state.noMeatDishes);
  };
  displayMeat = () => {
    this.setState({
      display: "meat"
    });
    this.componentDidMount();
    console.log("meat:");
    console.log(this.state.meatDishes);
  };
  displayNoGluten = () => {
    this.setState({
      display: "no gluten"
    });
    console.log("no gluten:");
    console.log(this.state.noGlutenDishes);
  };

  displayNoEgg = () => {
    this.setState({
      display: "no egg"
    });
    console.log("no egg:");
    console.log(this.state.noEggDishes);
  };

  displayNoDairy = () => {
    this.setState({
      display: "no dairy"
    });
    this.componentDidMount();
    console.log("no dairy:");
    console.log(this.state.noDairyDishes);
  };

  displayVegan = () => {
    this.setState({
      display: "vegan"
    });
    this.componentDidMount();
    console.log("vegan:");
    console.log(this.state.veganDishes);
  };

  render = () => {
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
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
    else if (this.state.display === "vegan") {
      return (
        <div>
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing vegan: </h3>
          <Dishes category={this.state.veganDishes} />
         
        </div>
      );
    }//else if
  }; //render
} //class
