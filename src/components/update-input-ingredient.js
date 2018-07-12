import React from "react";
//import SingleInputIngredient from "./single-input-ingredient";
//import ClassifyAs from "./classify-as"
import { connect } from "react-redux";
import * as actions from "../actions";
import AddUpdateIngredients from "./add-update-ingredients";

export class UpdateInputIngredient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value:""
    }
    this._ingredient = React.createRef();
  }
  

  componentDidMount() {

    this.props.dispatch(actions.clearIngredients());
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
  
  console.log("clicked 126");
  const ingredient = this._ingredient.current.value;
  this.props.dispatch(actions.addIngredient(ingredient));
  this.setState({
    ingredients: [...this.props.ingredients, ingredient],
    value: ""
    //still need to setState to keep in the state since
    //I will clear the redux store later
  });

}

handleChange = e => {

  this.setState({
          value: e.target.value
  });
}



  render() {
      return (
        <section >
            <div className="add-ingredients-container">
          <AddUpdateIngredients stateIngredients={this.props.ingredients}/>
          </div>

      <div className="">
         <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text width-90"
              type="text"
              placeholder="e.g. lettuce"
              ref={this._ingredient}
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              
            />
            
            <button
              className="button"
              type="button"
              onClick={this.addIngredient}
            >
              {" "}
              ADD TO LIST
            </button>
      </div>

          
        </section>
      );

   

  }
}
export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(UpdateInputIngredient);