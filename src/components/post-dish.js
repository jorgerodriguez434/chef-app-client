import React from "react";
//import Ingredients from "./ingredients";

export default class PostDish extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  onSubmit = () => {
    console.log("clicked!");
    this.setState({
      display: "hello world"
    });
  };

  goBack = () => {
    console.log("clicked!");
    this.setState({
      display: "landing"
    });
  };

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
            <label htmlFor="type">Type</label>
            <div className="scroll">
              <select className="scroll" required>
                <option className="option" value="Burger">
                  Burger
                </option>
                <option value="Salad">Salad</option>
                <option value="Wings">Wings</option>
              </select>
            </div>
            <fieldset className="margin-bottom">
              <legend> Categories</legend>
              <label htmlFor="no-meat"> No meat </label>
              <input
                className="checkbox"
                value="no-meat"
                type="checkbox"
                name="no-meat"
              />
              <label htmlFor="meat"> Meat </label>
              <input
                className="checkbox"
                value="meat"
                type="checkbox"
                name="meat"
              />
              <label htmlFor="gluten-free"> Gluten-free </label>
              <input
                className="checkbox"
                value="gluten-free"
                type="checkbox"
                name="gluten-free"
              />
            </fieldset>

            <fieldset>
              <legend> Ingredients </legend>
              {/*<Ingredients />*/}
              {/*
                redux-trell directory is what i need
                I need to use redux: actions, reducers, store
                I already have my actions, reducers, and store
                I need to dispatch an action
                My reducer needs to handle this action
                The reducer will update the store
                Try do redux update on sandbox when you get a chance
                This will provide more practice for you since you have
                not done them in a while.
                So it is best to feel confident in redux.
                You should be able to build a redux app from scratch

                I need an action called ADD_INGREDIENT
                I need this action to be handled by a reducer
                My end goal is to have something that looks like this:


export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient
});              

import { ADD_INGREDIENT } from "../actions/index";

export const ChefAppReducer = (state = initialState, action) => {
  if (action.type === ADD_INGREDIENT) {
  
const initialState = {
  ingredients: [
    "Quinoa",
    "Mushroom",
    "Walnut",
    "Lettuce",
    "Tomato",
    "Pickled_red_onions",
    "Cucumber",
    "Parmesan_mayo",
    "Bun"
  ],
  glutenItems: ["BUN"],
  meatItems: ["No meat"],
  dairyItems: ["No dairy"],
  eggItems: ["Parmesan mayo"],
  name: "Blackhawk Burger",
  type: "Burger",
  category: "No meat",
  hasGluten: true,
  hasMeat: false,
  hasDairy: false,
  hasEgg: true,
  created: "2018-06-12T06:11:13.093Z",
  __v: 0
};
    const newState = Object.assign({}, state, {
        feedback: action.feedback,
        guesses: [...state.ingredients, action.ingredient]
      });
      return newState;
    }
  

                */}
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


