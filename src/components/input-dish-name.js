import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class InputDishName extends React.Component {
  constructor() {
    super();
    this.state = {};

    this._dishName = React.createRef();
  }

  setName = () => {
    const dishName = this._dishName.current.value;
    this.props.dispatch(actions.setDishName(dishName));
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.setName}>
          <label htmlFor="dish-name">Name of dish</label>
          <input
            className="input my-text width-90"
            type="text"
            placeholder="e.g. Burger Deluxe"
            ref={this._dishName}
            required
          />
        </form>
      </div>
    );
  };
}

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(InputDishName);
