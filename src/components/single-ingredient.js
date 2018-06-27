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

    onClick = () => {
    console.log("clicked");
    console.log(this.state)
    const index = this.props.ingredients.indexOf(this.props.stateIngredient);
    console.log(index);
    this.props.dispatch(actions.removeIngredient(index));
    }

    render = () => {
        console.log(this.props);
        return (

            <li key={this.props.index} className="add-ingredient">
            {this.props.stateIngredient}
            <button type="button" onClick={this.onClick}> remove </button>
          </li>


        );
    }

}

export const mapStateToProps = state => ({
    ingredients: state.ingredients,
    categories: state.categories
  });
  
  export default connect(mapStateToProps)(SingleIngredient);