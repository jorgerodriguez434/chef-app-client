import React from "react";
import { connect } from "react-redux";

export class UpdateSingleIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: this.props.stateIngredient
    };
  }

  onClick = () => {
    // console.log("clicked123");
    // console.log(this.state);
  };

  render = () => {
    return (
      <li key={this.props.index} className="add-ingredient">
        {this.state.ingredient}
        <button
          type="button"
          onClick={this.onClick}
          className="remove-button border"
        >
          {" "}
          remove979{" "}
        </button>
      </li>
    );
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories
});

export default connect(mapStateToProps)(UpdateSingleIngredient);
