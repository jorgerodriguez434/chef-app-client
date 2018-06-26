import React from "react";
//import SingleInputIngredient from "./single-input-ingredient";
//import ClassifyAs from "./classify-as"
import { connect } from "react-redux";
import * as actions from "../actions";
import AddIngredients from "./add-ingredients";

export class InputIngredient extends React.Component {

  /*
    I dispatched an action, now how do I add to the list? Done
    Now display ingredients
  */

  constructor() {
    super();
    this._ingredient = React.createRef();
  }

 addIngredient = () => {
  console.log("clicked 123");
  const ingredient = this._ingredient.current.value;
  this.props.dispatch(actions.addIngredient(ingredient));
}

  render() {
    
      return (
        <section >
          <div className="add-ingredients-container">
            <AddIngredients/>
          </div>
          <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text"
              type="text"
              placeholder="e.g. lettuce"
              ref={this._ingredient}
              
            />
            
            <button
              className="ingredient-button"
              type="button"
              onClick={this.addIngredient}
            >
              {" "}
              Add to list 1233
            </button>
          
        </section>
      );

   

  }
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(InputIngredient);