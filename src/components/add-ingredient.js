import React from "react";
//import InputIngredients from "./input-ingredients";
import ClassifyAs from "./classifyAs";
export default class AddIngredients extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: ["tomato"]
    };
    this.inputRef = React.createRef();
  }
  addIngredient= () => {
   const ingredient = this.inputRef.current.value;
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    });
    //this.props.dispatch(action)
 
  };
  render() {
    return (

        <div> 
            <h2> add ingredients component </h2> 
            <ul>
      {" "}
      {this.state.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text"
              type="text"
              ref={this.inputRef}
              placeholder="e.g. tomato"
            />
            <ClassifyAs/>
          </li>
        );
      })}{" "}
    </ul>

<button className="ingredient-button" type="button" onClick={this.addIngredient}> Add ingredient</button>
        </div>
    );
  }
}


/*
 <ul>
      {" "}
      {this.state.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text"
              type="text"
              ref={this.inputRef}
              placeholder="e.g. tomato"
            />
          </li>
        );
      })}{" "}
    </ul>
*/