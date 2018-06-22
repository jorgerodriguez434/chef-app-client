import React from "react";
import InputIngredients from "./input-ingredients";
import Ingredients from "./ingredients";
//import Categories from "./categories";
import Type from "./type";
//import Contains from "./contains";
//import ClassifyAs from "./classifyAs";
import { API_BASE_URL } from "../config";

export default class PostDish extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing",
      name: "",
      type: "",
      categories: ["none"],
      ingredients: [],
      image: ""
    };
    this._dishName = React.createRef();
    this._ingredientName = React.createRef();
    this._dishImage = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    this.setCategories(e, this.setIngredients);
    this.setName();
    this.setImage();
    this.setState({
      display: "hello world"
    }); 
     setTimeout(this.postRequest, 1000)

  };

  postRequest = () => {
    const data = this.state
    fetch(API_BASE_URL, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  } 

  goBack = () => {
    this.setState({
      display: "landing",
      name: "",
      type: "",
      categories: ["none"],
      ingredients: [],
    });
  };

  setName = () => {
    const name = this._dishName.current.value;
    this.setState({
        name
    });
  }
 setIngredients = () => {
    const ingredient = this._ingredientName.current.value;
    this.setState({
        ingredients: [...this.state.ingredients, ingredient]
    });
  } 

  setImage = () => {
    const image = this._dishImage.current.value;
    this.setState({
          image
    });
  }


  setCategories = (e, cb) => {
    const checkboxes = e.currentTarget.getElementsByClassName(
      "classify-as-checkbox"
    );
    const categories = [];
    //console.log(checkboxes);
    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        categories.push(checkbox.value);
      }
      return categories;
    });

    this.setState({ categories });
    cb();
  };

  render = () => {
 
    console.log(this.state.image);
    if (this.state.display === "landing") {
      return (
        <div>
          <h1> this the PostDish component! </h1>
          <p> Please add a dish by entering the following information </p>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="dish-name">Name of dish</label>
            <input
              className="input my-text"
              type="text"
              ref={this._dishName}
              placeholder="e.g. Burger Deluxe"
              required
            />
            <Type />

            <fieldset className="margin-bottom">
              <legend> Add Ingredients </legend>
              <InputIngredients/> 
              {/*Input ingredients component currently has the value of this.state.ingredients
               which is tomato
               So how do I get this value out into another component? Here is where Redux comes in.
               //every ingredient needs to have its own state
              */}
              
            </fieldset>
            <label htmlFor="dish-img">Choose an image for the dish!</label>
            <input type="file" className="choose-file-button" ref={this._dishImage}/>

            <button type="submit" className="button">
              {" "}
              Post Dish!{" "}
            </button>
          </form>
        </div>
      );
    } //if
    else if (this.state.display === "hello world") {
      return (
        <div>
          <h1> You did it! </h1>
          <h2> Dish Name: {this.state.name}</h2>
          <h2> Categories: {this.state.categories}</h2>
          <h2>
            {" "}
            Ingredients: <Ingredients
              ingredients={this.state.ingredients}
            />{" "}
          </h2>
          <button onClick={this.goBack} className="button">
            {" "}
            go back{" "}
          </button>
        </div>
      );
      //reset State
    }
  };
}
