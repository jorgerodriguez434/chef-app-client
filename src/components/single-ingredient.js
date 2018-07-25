import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class SingleIngredient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ingredient: this.props.stateIngredient
        } 
    }

    remove = () => {
    console.log("remove button clicked");
    const index = this.props.ingredients.indexOf(this.props.stateIngredient);
    console.log(this.props.ingredients[index] + " has been removed at index "+ index)
    this.props.dispatch(actions.removeIngredient(index));
    }

    render = () => {
        return (

            <li key={this.props.index} className="add-ingredient">
            {this.props.stateIngredient}
            <button type="button" onClick={this.remove} className="remove-button"> remove </button>
          </li>


        );
    }

}

export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(SingleIngredient);