import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";
//import Type from "./type";
//import InputIngredient from "./input-ingredient";
import UpdateInputIngredient from "./update-input-ingredient";
import ClassifyAs from "./classify-as";
import { connect } from "react-redux";
import * as actions from "../actions";
import Entree from "./entree";
//import Menu from "./menu";

export class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: this.props.stateName, //need to pass these becasue it is for every individual dish
      //and later change the state of name using Onchange
      ingredients: this.props.stateIngredients, //I might not have to set this at all
      categories: this.props.stateCategories
    };
  }

  setUpdate = () => {
    this.setState({
      display: "set update"
    });
    console.log("update button clicked!");
  };

  goBack = () => {
    this.setState({
      display: "landing"
    });
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    this.addCategory(e);
    setTimeout(this.putRequest, 1000);
  };

  deleteDish = () => {
    console.log("dele");
    fetch(`${API_BASE_URL}/${this.props.dishId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));

      this.setState({
          display: "dish deleted"
      });
  };

  setDelete = () => {
    this.setState({
      display: "set delete"
    });
    console.log("delete button clicked!");
  };

  putRequest = () => {
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories
    };

    this.setState({
      ingredients: this.props.ingredients,
      categories: this.props.categories,
      display: "dish updated"
    });

    fetch(`${API_BASE_URL}/${this.props.dishId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  addCategory = e => {
    this.props.dispatch(actions.clearCategories());
    const checkboxes = e.currentTarget.getElementsByClassName(
      "classify-as-checkbox"
    );

    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        this.props.dispatch(actions.addCategory(checkbox.value));
      }
      return checkbox.value;
    });
  };

  render = () => {
    //console.log(this.props);
    if (this.state.display === "landing") {
      return (
        <Entree
          key={this.props.index /*this is the change I need it, use this.props.stateName, etc*/}
          index={this.props.index}
          name={this.props.stateName}
          image={this.props.dishImage}
          ingredients={this.props.stateIngredients}
          setUpdate={this.setUpdate}
          setDelete={this.setDelete}
        />
      );
    } //if
    if (this.state.display === "set update") {
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.props.stateName} </h2>
          <img src={this.props.dishImage} alt={this.props.stateName} />
          <Ingredients ingredients={this.props.stateIngredients} />
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <label htmlFor="dish-name">update name of dish</label>
              <input
                type="text"
                className="input my-text"
                value={this.props.stateName}
                onChange={this.handleNameChange.bind(this)}
              />

              <fieldset className="margin-bottom">
                <legend> update Ingredients </legend>
                <UpdateInputIngredient
                  stateIngredients={this.props.stateIngredients}
                  stateCategories={this.props.stateCategories}
                />
                {/* need to do this to pass the ingredients for every dish
      */}
              </fieldset>

              <ClassifyAs />
              <label htmlFor="dish-img">Choose an image for the dish!</label>
              <input
                type="file"
                className="choose-file-button"
                ref={this.props.ref}
              />

              <button type="submit" className="button">
                {" "}
                UPDATE DISH!{" "}
              </button>
            </form>
            <button type="button" className="button" onClick={this.goBack}>
              {" "}
              GO BACK{" "}
            </button>
          </div>
        </li>
      );
    } //if
    if (this.state.display === "dish updated") {
      return (
        <div>
          <p> This dish has been updated! </p>
          <Entree
          key={this.props.index /*this is the change I need it, use this.props.stateName, etc*/}
          index={this.props.index}
          name={this.props.stateName}
          image={this.props.dishImage}
          ingredients={this.props.stateIngredients}
          setUpdate={this.setUpdate}
          setDelete={this.setDelete}
        />
      );
        </div>
      );
    } //if

    if (this.state.display === "set delete") {
      return (
        <div>
          <li key={this.props.index} className="dish">
          <h2> {this.props.stateName} </h2>
          <img src={this.props.dishImage} alt={this.props.stateName} />
          <Ingredients ingredients={this.props.stateIngredients} />
          </li>
          <p> Are you sure you want to delete this dish? </p>

          <button type="button" className="button" onClick={this.deleteDish}>
            {" "}
            YES{" "}
          </button>
          <button type="button" className="button" onClick={this.goBack}>
            {" "}
            GO BACK{" "}
          </button>
        </div>
      );
    }//if
    if (this.state.display === "dish deleted") {
      return (
        <div>
          <p> Dish has been deleted! </p>
        </div>
      );
    } //if
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories
});

export default connect(mapStateToProps)(Dish);
