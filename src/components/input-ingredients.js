import React from "react";
import SingleInputIngredient from "./single-input-ingredient";
import ClassifyAs from "./classify-as";

export default class InputIngredients extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: ["tomato"]
    };
  }

  render() {
    return (
      <div>
        <h2> InputIngredients component </h2>
        <ul>
          {" "}
          {this.state.ingredients.map((ingredient, index) => {
            return <SingleInputIngredient key={index} index={index} />;
          })}{" "}
        </ul>
      </div>
    );
  }
}
