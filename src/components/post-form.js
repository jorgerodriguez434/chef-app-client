import React from "react";
import Type from "./type";
import InputIngredient from "./input-ingredient";
import { connect } from "react-redux";
//import * as actions from "../actions";

export class PostForm extends React.Component {

    constructor() {
        super();
        this._ingredient = React.createRef();
    }
    
 /* addIngredient = () => {
      console.log("clicked!");
      const ingredient = this._ingredient.current.value;
      this.props.dispatch(actions.addIngredient(ingredient));
      //console.log(ingredient);
      //most likely, I need to dispatch an action
      //add ingredient to list
  }  */

  render = () => {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="dish-name">Name of dish</label>
          <input
            className="input my-text"
            type="text"
            placeholder="e.g. Burger Deluxe"
            required
          />
          <Type />

          <fieldset className="margin-bottom">
            <legend> Add Ingredients </legend>
            <InputIngredient/>
            {/* 
      */}
          </fieldset>
          <label htmlFor="dish-img">Choose an image for the dish!</label>
          <input type="file" className="choose-file-button" ref={this.props.ref} />

          <button type="submit" className="button">
            {" "}
            Post Dish!{" "}
          </button>
        </form>
      </div>
    );
  };
}

export const mapStateToProps = state => ({
     ingredients: []
});

export default connect(mapStateToProps)(PostForm);