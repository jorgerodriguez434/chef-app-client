import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";
import UpdateInputIngredient from "./update-input-ingredient";
import ClassifyAs from "./classify-as";
import { connect } from "react-redux";
import * as actions from "../actions";
import Entree from "./entree";


export class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: this.props.stateName, 
      image: this.props.dishImage
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

  handleImageChange = e => {
    this.setState({
      image: e.target.value
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
      categories: this.props.categories,
      image: this.state.image
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

  componentDidMount = () => {
    /*this.setState({
        name: this.props.stateName
    }); 
    this.props.dispatch(actions.update(this.props.stateName));
    console.log(this.props.stateName);
    console.log(this.state);
    console.log("hi there"); */
  }

  render = () => {
    
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
      console.log(this.props)
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.props.stateName} </h2>
          <img src={this.props.dishImage} alt={this.props.stateName} />
          <Ingredients ingredients={this.props.stateIngredients} />
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <label htmlFor="dish-name">Update Name of Dish</label>
              <input
                type="text"
                className="input my-text"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
              />

              <fieldset className="margin-bottom">
                <legend> Update Ingredients </legend>
                <UpdateInputIngredient
                  stateIngredients={this.props.stateIngredients}
                  stateCategories={this.props.stateCategories}
                />
                {/* need to do this to pass the ingredients for every dish
      */}
              </fieldset>

              <ClassifyAs />
              <label htmlFor="dish-img">Update Image!</label>
          <input
            className="input my-text"
            type="text"
            placeholder= "URL image"
            value={this.state.image}
            onChange={this.handleImageChange.bind(this)}
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
          key={this.props.index /*this is the change I needed, use this.props.ingredients, etc*/}
          index={this.props.index}
          name={this.state.name}
          image={this.props.dishImage}
          ingredients={this.props.ingredients}
          setUpdate={this.setUpdate}
          setDelete={this.setDelete}
        />
      
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
  categories: state.categories,
  data: state.data
});

export default connect(mapStateToProps)(Dish);
