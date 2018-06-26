import React from "react";
import { connect } from "react-redux";
//import * as actions from "../actions";

export class SingleIngredient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ingredient: this.props.stateIngredient
        }
    }

    onClick = () => {
    console.log("clicked");
    console.log(this.state);
    //this.props.dispatch(actions.addIngredient(ingredient));
    
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