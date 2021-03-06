import React from "react";
import { API_BASE_URL } from "../config";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./dish.css";
import "./update-input-ingredients.css";
import ClassifyAs from "./classify-as";
import { RingLoader } from "react-spinners";
import InputIngredient from "./input-ingredient";
import Ingredients from "./ingredients";
import { Redirect } from "react-router-dom";
import "./update-dish.css";

export class UpdateDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      isPending: false,
      message: null,
      name: this.props.dishName,
      image: this.props.image
    };
  }

  goBack = () => {
    this.setState({
      display: "menu"
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

  updateRequestPromise = () => {
    const submit = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    });

    const error = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Error!");
      }, 1500);
    });

    const success = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 1500);
    });

    submit.then(() => {
      if (this.props.ingredients.length === 0) {
        error
          .then(() => {
            // console.log("another promise");
            // console.log(this.props.ingredients.length);
            this.setState({
              message: "You must enter at least 1 ingredient!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else if (this.state.image.match(/\.(jpeg|jpg|gif|png)$/) === null) {
        error
          .then(() => {
            // console.log("another promise");
            this.setState({
              message: "You must enter a valid image URL!",
              isPending: false
            });
          })
          .then(this.setMessageToNull);
        return false;
      } else {
        success
          .then(() => {
            this.setState({
              isPending: false
            });
          })
          .then(this.putRequest);
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log("submitted!");
    this.addCategory(e);
    this.setState({
      isPending: true
    });
    this.updateRequestPromise();
  };

  putRequest = () => {
    // console.log("put request");
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories,
      image: this.state.image
    };
    console.log(data);
    this.setState({
      display: "dish updated"
    });

    fetch(`${API_BASE_URL}/${this.props.reduxId}`, {
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
    this.props.dispatch(actions.clearCategories());
    console.log("update dish component mounted");
    console.log(this.props);
    this.props.categories.map(category => {
      if (category === "contains-meat") {
        document.getElementById("contains-meat").checked = true;
      }
      if (category === "contains-gluten") {
        document.getElementById("contains-gluten").checked = true;
      }
      if (category === "contains-egg") {
        document.getElementById("contains-egg").checked = true;
      }
      if (category === "contains-dairy") {
        document.getElementById("contains-dairy").checked = true;
      }
      if (category === "none-apply") {
        document.getElementById("none-apply").checked = true;
      }
      return category;
    });
  };

  render = () => {
    console.log(this.state.name);
    if (this.state.display === "landing") {
      return (
        <section className="update-dish-outside-container">
          <div className="update-dish-container">
            <section className="dish">
              <div
                className="name-and-image-and-ingredients"
                aria-live="polite"
              >
                <h2> {this.props.dishName} </h2>
                <img src={this.props.image} alt={this.props.dishName} />
                <div className="ingredients">
                  <Ingredients ingredients={this.props.ingredients} />
                </div>
              </div>
              <section className="update-forms" aria-live="polite">
                {" "}
                {/* in dish.css*/}
                <form className="update-ingredients-container">
                  {" "}
                  {/*in update-ingredients.css*/}
                  <h2> Update Ingredients </h2>
                  <div className="update-input-ingredient">
                    <InputIngredient />
                  </div>
                </form>
                <form onSubmit={this.onSubmit} className="the-dish">
                  <h2> The Dish </h2>
                  <label htmlFor="dish-name">Update Name of Dish</label>
                  <input
                    type="text"
                    className="input my-text width-90"
                    value={this.state.name}
                    onChange={this.handleNameChange.bind(this)}
                  />

                  <ClassifyAs />
                  <label htmlFor="dish-img">Update Image!</label>
                  <input
                    className="input my-text width-90"
                    type="text"
                    placeholder="URL image"
                    value={this.state.image}
                    onChange={this.handleImageChange.bind(this)}
                  />

                  <button type="submit" className="button">
                    {" "}
                    UPDATE DISH!{" "}
                  </button>

                  <p className="red-font"> {this.state.message}</p>
                  <div className="spinner">
                    <RingLoader
                      color={"#123abc"}
                      loading={this.state.isPending}
                    />
                  </div>
                  <button
                    type="button"
                    className="button"
                    onClick={this.goBack}
                  >
                    {" "}
                    CANCEL{" "}
                  </button>
                </form>
              </section>
            </section>
          </div>
        </section>
      );
    } else if (this.state.display === "menu") return <Redirect to="/menu" />;
    else if (this.state.display === "dish updated") {
      return <Redirect to="/success-updated" />;
    }
  }; 
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
  image: state.reduxDishImage,
  dishName: state.reduxDishName,
  reduxId: state.reduxId
});

export default connect(mapStateToProps)(UpdateDish);
