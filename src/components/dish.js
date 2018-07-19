import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";
import UpdateInputIngredient from "./update-input-ingredient";
import ClassifyAs from "./classify-as";
import { connect } from "react-redux";
import * as actions from "../actions";
import Entree from "./entree";
import "./dish.css";
import "./update-input-ingredients.css";

import { RingLoader } from "react-spinners";
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

  setUpdate = (e) => {
    this.setState({
      display: "set update",
    });
    
    this.props.dispatch(actions.setDishName(this.state.name));
    this.props.dispatch(actions.setDishImage(this.state.image));
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
              message: "You must check at least one checkbox!",
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
            //this.props.dispatch(actions.setDisplay("Success!"));
            this.setState({
              isPending: false
            });
          })
          .then(this.putRequest);
      }
    });

    //setTimeout(this.putRequest, 1000);
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

    console.log("hi there");
  }

  render = () => {
  
    if (this.state.display === "landing") {
      return (
        <Entree className=""
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
      <div className="name-and-image-and-ingredients" aria-live="polite">
          <h2> {this.props.stateName} </h2>
          <img src={this.props.dishImage} alt={this.props.stateName} />
          <div className="ingredients"> 
          <Ingredients ingredients={this.props.stateIngredients} />
          </div>
        </div>
      <section className="update-forms" aria-live="polite"> {/* in dish.css*/}
          <form className="update-ingredients-container"> {/*in update-ingredients.css*/}
          
                <h2> Update Ingredients </h2>
                <UpdateInputIngredient
                  stateIngredients={this.props.stateIngredients}
                  stateCategories={this.props.stateCategories}
                />
  

            </form>
         
            <form onSubmit={this.onSubmit}>
              <label htmlFor="dish-name">Update Name of Dish</label>
              <input
                type="text"
                className="input my-text"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
              />

             
              <ClassifyAs />
              <label htmlFor="dish-img">Update Image!</label>
          <input
            className="input my-text width-90"
            type="text"
            placeholder= "URL image"
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
            <button type="button" className="button" onClick={this.goBack}>
              {" "}
              CANCEL{" "}
            </button>
            </form>
          </section>
        </li>
      );
    } //if
    if (this.state.display === "dish updated") {
      return <Redirect to="/success-updated" />;
    } //if

    if (this.state.display === "set delete") {
      return (
        <div>
          <li key={this.props.index} className="dish">
          <h2> {this.props.stateName} </h2>
          <img src={this.props.dishImage} alt={this.props.stateName} />
        
          
          <p className="set-delete"> Are you sure you want to delete this dish? </p>

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
    }//if
    if (this.state.display === "dish deleted") {
      return (
        <div>
          <p className="ingredients"> {this.state.message}</p>
        </div>
      );
    } //if
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
  image: state.reduxDishImage,
  dishName: state.reduxDishName

});

export default connect(mapStateToProps)(Dish);