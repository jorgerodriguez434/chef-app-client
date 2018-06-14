import React from "react";
import AddIngredients from "./add-ingredient";
//import Ingredients from "./ingredients";
import Categories from "./categories";
import Type from "./type";
//import Contains from "./contains";

export default class PostDish extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing",
      ingredients:[],
      dishName: ""
    };
    this._dishName = React.createRef();

  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      display: "hello world"
    });
    this.setDishName();
  };

  goBack = () => {
    this.setState({
      display: "landing"
    });
  };

  setDishName = () => {
      const dishName = this._dishName.current.value;
      this.setState({
        dishName
      });
      console.log(`Dish Name: ${dishName}`);
  }


  render = () => {
      
    if (this.state.display === "landing") {
      return (
        <div>
          <h1> this the PostDish component! </h1>
          <p> Please add a dish by entering the following information </p>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="dish-name">Name of dish</label>
            <input
              className="input my-text"
              type="text"
              ref={this._dishName}
              placeholder="e.g. Burger Deluxe"
              required
            />
            <Type/>
            <fieldset className="margin-bottom">
              <legend> Categories</legend>
                <Categories/>
            </fieldset>

            <fieldset>
              <legend> Ingredients </legend>
              <AddIngredients/>
            </fieldset>


            <button type="submit" className="button">
              {" "}
              Post Dish!{" "}
            </button>
          </form>
        </div>
      );
    } //if
    else if (this.state.display === "hello world") {
      return (
        <div>
          <h1> You did it! </h1>
          <h2> Dish Name: {this.state.dishName}</h2>
          <button onClick={this.goBack} className="button">
            {" "}
            go back{" "}
          </button>
        </div>
      );
    }
  };
}

/*

 name: "Fatpour Burger",
  type: "burger",
  category: "meat",
  ingredients: [
    ingredients.BEEF,
    ingredients.MERKTS_CHEDDAR_CHEESE,
    ingredients.TOMATO,
    ingredients.FRIED_ONION,
    ingredients.PICKLED_JALAPENOS,
    ingredients.TEXAS_TOAST,
    ingredients.LETTUCE,
    ingredients.BLACK_PEPPER_TRUFFLE_AIOLI,
    ingredients.FRIED_EGG,
    ingredients.BACON
  ],
  hasGluten: true,
  hasMeat: true,
  hasDairy: true,
  hasEgg: true,
  glutenItems: [ingredients.FRIED_ONION, ingredients.TEXAS_TOAST],
  meatItems: [ingredients.BEEF, ingredients.BACON],
  dairyItems: [ingredients.MERKTS_CHEDDAR_CHEESE],
  eggItems: [ingredients.FRIED_EGG],
*/

/*
 <input
              className="post-dish-input my-text"
              type="text"
              ref={this._passwordRef}
              placeholder="e.g. Burger, Salad, Sandwich"
            />

            

*/


