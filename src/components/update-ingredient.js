import React from "react";
//import SingleInputIngredient from "./single-input-ingredient";
//import ClassifyAs from "./classify-as"
import { connect } from "react-redux";
import * as actions from "../actions";
import AddIngredients from "./add-ingredients";

export class UpdateIngredient extends React.Component {

  /*
    I dispatched an action, now how do I add to the list? Done
    Now display ingredients
  */


  constructor(props) {
    super(props);
   
    this._ingredient = React.createRef();
  }

  componentDidMount() {
    this.props.stateIngredients.map(ingredient => {
        this.props.dispatch(actions.addIngredient(ingredient));
        return ingredient;
      });
      this.props.stateCategories.map(category => {
        this.props.dispatch(actions.addCategory(category));
        return category;
      });

      
  }
 addIngredient = () => {
  console.log("clicked 123");
  
  const ingredient = this._ingredient.current.value;
  console.log(ingredient);
  this.props.dispatch(actions.addIngredient(ingredient));

}

  render() {

      return (
        <section >
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
              Add to list 456
            </button>
          <div className="add-ingredients-container">
          <AddIngredients ingredients={this.props.ingredients}/>
          </div>
        </section>
      );

   

  }
}
export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(UpdateIngredient);