import React from "react";
//import SingleInputIngredient from "./single-input-ingredient";
//import ClassifyAs from "./classify-as"
import { connect } from "react-redux";
import * as actions from "../actions";
import AddIngredients from "./add-ingredients";

export class InputIngredient extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ""
      //ingredients: this.props.ingredients
    }
    this._ingredient = React.createRef();
  }

  handleChange = e => {

    this.setState({
            value: e.target.value
    });
  }


 addIngredient = () => {
  console.log("add ingrdient button clicked!");
  const ingredient = this._ingredient.current.value;
 // console.log(ingredient);
  this.props.dispatch(actions.addIngredient(ingredient));
  this.setState({
    value: "",
  })
}


  render() {
    //console.log(this.props);
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
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              
            />
            
            <button
              className="ingredient-button"
              type="button"
              onClick={this.addIngredient}
            >
              {" "}
              Add to list
            </button>
          
        </section>
      );

   

  }
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(InputIngredient);