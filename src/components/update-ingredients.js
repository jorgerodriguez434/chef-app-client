import React from "react";
//import SingleInputIngredient from "./single-input-ingredient";
//import ClassifyAs from "./classify-as"
import { connect } from "react-redux";
//import * as actions from "../actions";
import AddUpdateIngredients from "./add-update-ingredients";

export class UpdateIngredient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        ingredients: this.props.stateIngredients,
        categories: this.props.stateCategories
    }
    this._ingredient = React.createRef();
  }

  /*componentDidMount() {
    this.props.stateIngredients.map(ingredient => {
        this.props.dispatch(actions.addIngredient(ingredient));
        return ingredient;
      });
      this.props.stateCategories.map(category => {
        this.props.dispatch(actions.addCategory(category));
        return category;
      });
  } */



 addIngredient = () => {
  console.log("clicked 123");
  const ingredient = this._ingredient.current.value;
  console.log(ingredient);
  //this.props.dispatch(actions.addIngredient(ingredient));
  this.setState({
        ingredients: [...this.state.ingredients, ingredient]
  });

}

  render() {
    //console.log(this.state.ingredients);
      return (
        <section >
            <div className="add-ingredients-container">
          <AddUpdateIngredients stateIngredients={this.state.ingredients}/>
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
              Add to list 456
            </button>
            

          
        </section>
      );

   

  }
}
export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(UpdateIngredient);