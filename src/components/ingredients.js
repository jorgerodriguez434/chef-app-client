import React from "react";

const Ingredients = props => (
  <ul> {props.ingredients.map((ingredient, index) => {
    return(
      <li key={index}>
         {ingredient}
      </li>);
  })} </ul>
);

export default Ingredients;

/* <label htmlFor="ingredient1">Ingredient</label>
        <input
          className="input my-text"
          type="text"
          ref={this._ingredient1}
          placeholder="e.g. tomato"
          required
        />
        <button type="button" className="ingredient-button">
          {" "}
          Add another
        </button> */