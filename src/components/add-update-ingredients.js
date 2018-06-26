import React from "react";
import UpdateSingleIngredient from "./update-single-ingredient"
//import { connect } from "react-redux";

export default class AddUpdateIngredients extends React.Component {
  render = () => {
        console.log(this.props)
    return (
      <ul>
        {" "}
        {this.props.stateIngredients.map((ingredient, index) => {
          return (
            <UpdateSingleIngredient key={index} index={index} stateIngredient={ingredient}/>
          );
        })}{" "}
      </ul>
    );
  };
}

  
