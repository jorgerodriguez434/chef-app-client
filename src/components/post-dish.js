import React from "react";
import Ingredients from "./ingredients";
import ClassifyAs from "./classify-as";
import InputIngredient from "./input-ingredient";
import Links from "./links";
import { API_BASE_URL } from "../config";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./post-dish.css";
import LoginForm from "./login-form";
//import InputDishName from "./input-dish-name"

export class PostDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: "none",
      image: "none",
      message: ""
    };
     this._dishName = React.createRef();
    this._dishImage = React.createRef();
  }

  setMessageToNull = () => {
        this.setState({
          message: null
        })
  }

  onSubmit = e => {
    console.log("clicked");
    e.preventDefault();
    console.log(this.props);
    this.addCategory(e);
    this.setName();
    this.setImage();
    if (this.props.ingredients.length === 0) {

      this.setState({
        message: "You must enter at least 1 ingredient!"
      });


      //this.props.dispatch(actions.setDisplay("You must enter at least 1 ingredient!"));
      //setTimeout(this.goBack, 1500);
      alert("You must enter at least 1 ingredient!");
      return false;
    }

    else if(this.props.categories.length === 0){
      //this.props.dispatch(actions.setDisplay("no categories"));
      //setTimeout(this.goBack2, 1500);
      alert("You must check at least one checkbox.");
      this.props.categories.length++;
    }
    
    else {
      this.props.dispatch(actions.setDisplay("Success!"));
      setTimeout(this.postRequest, 1000);
    }
  };

  componentDidMount = () => {
    this.props.dispatch(actions.clearIngredients());
    this.props.dispatch(actions.clearCategories());
    if (localStorage.getItem("isAuthenticated")) {
      console.log("authenticated!");
      this.props.dispatch(actions.setDisplay("landing"));
    } else {
      this.props.dispatch(actions.setDisplay("login"));
    }
  };

  postRequest = () => {
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories,
      image: this.state.image
    };

    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authentication: `bearer {localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  goBack = () => {
    this.props.dispatch(actions.setDisplay("landing"));
    this.props.dispatch(actions.clearIngredients());
  };


  setName = () => {
    const name = this._dishName.current.value;
    this.setState({
      name
    }); 
  };

  setImage = () => {
    const image = this._dishImage.current.value;
    console.log(image);
    this.setState({
      image
    });
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

  render = () => {
    console.log(this.props);
    if (this.props.display === "landing") {
      return (
        <div>
          <Links />
          <div className="intro-image-post-dish">
            <h1> POST A DISH </h1>
          </div>
          <section className="post-dish-outside-container">
            <div className="post-dish-container">
              <p> Please add a dish by entering the following information </p>
              <form>
              <fieldset className="margin-bottom add-ingredients-main-box">
                  <legend> Add Ingredients </legend>
                  <InputIngredient _required={this.state.required} />
                </fieldset>
                </form>
              <form onSubmit={this.onSubmit}>
              
              <fieldset className="">
              <legend> The dish </legend>
                 <label htmlFor="dish-name">Name of dish</label>
                <input
                  className="input my-text width-90"
                  type="text"
                  placeholder="e.g. Burger Deluxe"
                  ref={this._dishName}
                  required
      /> 
                <ClassifyAs />
                <label htmlFor="dish-img">
                  Choose a url image for the dish!
                </label>
                <input
                  className="input my-text width-90"
                  type="text"
                  placeholder="URL image"
                  ref={this._dishImage}
                  required
                />

                <button type="submit" className="button">
                  {" "}
                  POST DISH!{" "}
                </button>
                </fieldset>
              </form>
            </div>
          </section>
        </div>
      );
    } //if
    if (this.props.display === "Success!") {
      return (
        <div>
          <section className="post-dish-outside-container">
            <div className="post-dish-container">
              <h1> Success! </h1>
              <h2> Dish Name: {this.state.name}</h2>
              <h2>
                <img src={this.state.image} alt={this.state.name} />{" "}
                <Ingredients ingredients={this.props.ingredients} />{" "}
              </h2>
              <button onClick={this.goBack} className="post-dish-buttons">
                {" "}
                go back{" "}
              </button>
            </div>
          </section>
        </div>
      );
      //reset State
    } //if
    if (this.props.display === "login") {
      return <LoginForm />;
    }

    if (this.props.display === "You must enter at least 1 ingredient!") {
      return (
        <div>
        <Links />
        <div className="intro-image-post-dish">
          <h1> POST A DISH </h1>
        </div>
        <section className="post-dish-outside-container">
          <div className="post-dish-container">
            <p> Please add a dish by entering the following information </p>
            <form>
            <fieldset className="margin-bottom add-ingredients-main-box">
                <legend> Add Ingredients </legend>
                <InputIngredient _required={this.state.required} />
                {<h2> {this.state.message} </h2>}
              </fieldset>
              </form>
            <form onSubmit={this.onSubmit}>
            
            <fieldset className="">
            <legend> The dish </legend>
               <label htmlFor="dish-name">Name of dish</label>
              <input
                className="input my-text width-90"
                type="text"
                placeholder="e.g. Burger Deluxe"
                ref={this._dishName}
                required
    /> 
              <ClassifyAs />
              <label htmlFor="dish-img">
                Choose a url image for the dish!
              </label>
              <input
                className="input my-text width-90"
                type="text"
                placeholder="URL image"
                ref={this._dishImage}
                required
              />

              <button type="submit" className="button">
                {" "}
                POST DISH!{" "}
              </button>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
      );
    }//if
    if (this.props.display === "no categories") {
      return (
        <div>
        <Links />
        <div className="intro-image-post-dish">
          <h1> POST A DISH </h1>
        </div>
        <section className="post-dish-outside-container">
          <div className="post-dish-container">
            <p> Please add a dish by entering the following information </p>
            <form>
            <fieldset className="margin-bottom add-ingredients-main-box">
                <legend> Add Ingredients </legend>
                <InputIngredient _required={this.state.required} />
               
              </fieldset>
              </form>
            <form onSubmit={this.onSubmit}>
            
            <fieldset className="">
            <legend> The dish </legend>
               <label htmlFor="dish-name">Name of dish</label>
              <input
                className="input my-text width-90"
                type="text"
                placeholder="e.g. Burger Deluxe"
                ref={this._dishName}
                required
    /> 
              <ClassifyAs />
              <h2> Please check at least one! </h2>
              <label htmlFor="dish-img">
                Choose a url image for the dish!
              </label>
              <input
                className="input my-text width-90"
                type="text"
                placeholder="URL image"
                ref={this._dishImage}
                required
              />

              <button type="submit" className="button">
                {" "}
                POST DISH!{" "}
              </button>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
      );
    }//if
  };
}

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
  isAuthenticated: state.isAuthenticated,
  display: state.display
});

export default connect(mapStateToProps)(PostDish);


