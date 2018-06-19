import React from "react";
//import AddIngredients from "./add-ingredient";
import Ingredients from "./ingredients";
//import Categories from "./categories";
import Type from "./type";
//import Contains from "./contains";
import ClassifyAs from "./classifyAs";

export default class PostDish extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing",
      name: "",
      type: "",
      categories: [],
      ingredients:[{name: "tomato", hasMeat:false}],
      
    };
    this._dishName = React.createRef();
    this._ingredientName = React.createRef();

  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      display: "hello world"
    });
    this.setCategories(e);
    this.setChange();
   
  };

  goBack = () => {
    this.setState({
      display: "landing"
    });
  };

  setChange= () => {
      const name = this._dishName.current.value;
      const ingredient = this._ingredientName.current.value;
      /*
      If category is found, then setState to hasCategory === true
      */
      if (this.state.categories.indexOf("contains-meat")){
        this.setState({
          name,
          ingredients: [this.state.ingredients, {name: ingredient, hasMeat: true}]
  
        }); 
      }

      /*this.setState({
        name,
        ingredients: [this.state.ingredients, {name: ingredient}]

      }); */
      console.log(`Dish Name: ${name}`);
  }

  setCategories = e => {
    const checkboxes = e.currentTarget.getElementsByClassName("classify-as-checkbox")
    const categories = [];
    console.log(checkboxes);
    Object.values(checkboxes).map(checkbox => {
      
      if (checkbox.checked) {
        categories.push(checkbox.value);
      }
      return categories;
    });
    
    this.setState({ categories });  
  };


  render = () => {
    console.log(this.state.categories);
    console.log(this.state.ingredients);
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
              <legend> Add Ingredients </legend>
              <input type="text"  ref={this._ingredientName} className="input my-text"  placeholder="e.g. tomato" required/>
              <ClassifyAs/>
              {/*<AddIngredients/> Add ingredient component currently has the value of this.state.ingredients
               which is tomato
               So how do I get this value out into another component? Here is where Redux comes in.
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
          <h2> Dish Name: {this.state.name}</h2>
          <h2> Categories: {this.state.categories}</h2>
          <h2> Ingredients: <Ingredients ingredients={this.state.ingredients}/> </h2>
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


