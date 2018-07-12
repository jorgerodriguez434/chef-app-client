import React from "react";
import SingleIngredient from "./single-ingredient"


export default class AddUpdateIngredients extends React.Component {
  render = () => {
    return (
      <ul>
        {" "}
        {this.props.stateIngredients.map((ingredient, index) => {
          return (
            <SingleIngredient key={index} index={index} stateIngredient={ingredient}/>
          );
        })}{" "}
      </ul>
    );
  };
}

  
