import React from "react";
import { API_BASE_URL } from "../config";
import { connect } from "react-redux";
import * as actions from "../actions";
import Entree from "./entree";
import "./dish.css";
import "./update-input-ingredients.css";
import { Redirect } from "react-router-dom";

export class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: this.props.stateName,
      image: this.props.dishImage,
      isPending: false,
      message: null
    };
  }

  setUpdate = e => {
    this.setState({
      display: "set update"
    });
    this.props.dispatch(actions.clearCategories());
    this.props.dispatch(actions.clearIngredients());
    this.props.dispatch(actions.setDishName(this.state.name));
    this.props.dispatch(actions.setDishImage(this.state.image));
    this.props.dispatch(actions.setId(this.props.dishId));
    this.props.stateIngredients.map(ingredient => {
      this.props.dispatch(actions.addIngredient(ingredient));
      return ingredient;
    });
    this.props.stateCategories.map(category => {
      this.props.dispatch(actions.addCategory(category));
      return category;
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

  setMessageToNull = () => {
    setTimeout(() => {
      this.setState({
        message: null
      });
    }, 1500);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    this.addCategory(e);
    this.setState({
      isPending: true
    });
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    const anotherPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1500);
    });

    promise.then(() => {
      if (this.props.ingredients.length === 0) {
        anotherPromise
          .then(() => {
            console.log("another promise");
            console.log(this.props.ingredients.length);
            this.setState({
              message: "You must enter at least 1 ingredient!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else if (this.props.categories.length === 0) {
        anotherPromise
          .then(() => {
            console.log("another promise");
            this.setState({
              message: "You must check at least one category!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else if (this.state.image.match(/\.(jpeg|jpg|gif|png)$/) === null) {
        anotherPromise
          .then(() => {
            console.log("another promise");
            this.setState({
              message: "You must enter a valid image URL!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else {
        anotherPromise
          .then(() => {
            this.setState({
              isPending: false
            });
          })
          .then(this.putRequest);
      }
    });
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
      display: "dish deleted",
      message: "Dish has been deleted!"
    });

    setTimeout(() => {
      this.setState({
        message: null
      });
    }, 1500);
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

  // addCategory = e => {
  //  // this.props.dispatch(actions.clearCategories());
  //   const checkboxes = e.currentTarget.getElementsByClassName(
  //     "classify-as-checkbox"
  //   );
  //   //checkboxObject.checked = true|false

  //   Object.values(checkboxes).map(checkbox => {
  //     if (checkbox.checked) {
  //       this.props.dispatch(actions.addCategory(checkbox.value));
  //     }
  //     return checkbox.value;
  //   });
  // };

  componentDidMount = () => {
    console.log("dish mounted");
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <Entree
          className=""
          key={this.props.index}
          index={this.props.index}
          name={this.props.stateName}
          image={this.props.dishImage}
          ingredients={this.props.stateIngredients}
          setUpdate={this.setUpdate}
          setDelete={this.setDelete}
        />
      );
    }
    if (this.state.display === "set update") {
      return <Redirect to="/update-dish" />;
    }
    if (this.state.display === "dish updated") {
      return <Redirect to="/success-updated" />;
    }

    if (this.state.display === "set delete") {
      return (
        <div>
          <li key={this.props.index} className="dish">
            <h2> {this.props.stateName} </h2>
            <img src={this.props.dishImage} alt={this.props.stateName} />

            <p className="set-delete">
              {" "}
              Are you sure you want to delete this dish?{" "}
            </p>

            <button type="button" className="button" onClick={this.deleteDish}>
              {" "}
              YES{" "}
            </button>
            <button type="button" className="button" onClick={this.goBack}>
              {" "}
              CANCEL{" "}
            </button>
          </li>
        </div>
      );
    }
    if (this.state.display === "dish deleted") {
      return (
        <div>
          <p className="ingredients"> {this.state.message}</p>
        </div>
      );
    }
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
  image: state.reduxDishImage,
  dishName: state.reduxDishName
});

export default connect(mapStateToProps)(Dish);
