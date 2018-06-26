import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class SingleIngredient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ingredients: this.props.ingredients
        }
    }

    onClick = () => {
    console.log("clicked");
    const index = this.props.ingredients.indexOf(this.props.ingredient);
    console.log(index);
    this.props.dispatch(actions.removeIngredient(index));

    }

    render = () => {
    
        return (

            <li key={this.props.index} className="add-ingredient">
            {this.props.ingredient}
            <button type="button" onClick={this.onClick}> remove123 </button>
          </li>


        );
    }

}
//<SingleIngredient key={index} index={index} ingredient={ingredient}/>
export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(SingleIngredient);