import React from "react";
import SingleIngredient from "./single-ingredient"
import { connect } from "react-redux";

export class AddIngredients extends React.Component {
  render = () => {
        //console.log(this.props)
    return (
      <ul>
        {" "}
        {this.props.ingredients.map((ingredient, index) => {
          return (
            <SingleIngredient key={index} index={index} stateIngredient={ingredient}/>
          );
        })}{" "}
      </ul>
    );
  };
}

export const mapStateToProps = state => ({
    ingredients: state.ingredients
  });
  
export default connect(mapStateToProps)(AddIngredients);