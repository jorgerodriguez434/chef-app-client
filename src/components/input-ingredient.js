import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import AddIngredients from "./add-ingredients";
import "./input-ingredient.css";

export class InputIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      message: ""
    };
    this._ingredient = React.createRef();
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  addIngredient = e => {
    e.preventDefault();
    console.log("add ingredient button clicked!");
    const ingredient = this._ingredient.current.value;
    if (ingredient === "") {
      this.setState({
        message: "Must not be blank!"
      });
      setTimeout(() => {
        this.setState({
          message: null
        });
      }, 1500);
    } else {
      this.props.dispatch(actions.addIngredient(ingredient));
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <section className="input-ingredient-and-add-to-list-button-and-add-ingredients-container">
        {" "}
        {/* here*/}
        <div className="add-ingredients-container">
          <AddIngredients />
        </div>
        <div className="input-and-button">
          <label htmlFor="ingredient" className="ingredient-label">
            Ingredient
          </label>
          <input
            className="input my-text width-90 input-ingredient"
            type="text"
            placeholder="e.g. lettuce"
            ref={this._ingredient}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <p className="red-font" aria-live="polite">
            {" "}
            {this.state.message}
          </p>

          <button className="button" type="submit" onClick={this.addIngredient}>
            {" "}
            ADD TO LIST
          </button>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(InputIngredient);
