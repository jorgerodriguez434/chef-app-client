import React from "react";
import { connect } from "react-redux";
//import * as actions from "../actions";

export class UpdateSingleIngredient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ingredient: this.props.stateIngredient
        }
    }

    onClick = () => {
    console.log("clicked123");
    console.log(this.state);
    //remove this state, how?
    //this.props.dispatch(actions.setIngredient(this.state.ingredient))
   /* this.setState({
            ingredient: undefined
    }); */

  
    }

    render = () => {
    
        return (

            <li key={this.props.index} className="add-ingredient">
            {this.state.ingredient}
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
  
  export default connect(mapStateToProps)(UpdateSingleIngredient);