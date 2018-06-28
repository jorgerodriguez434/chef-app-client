import React from "react";
//import InputIngredients from "./input-ingredients";
import Ingredients from "./ingredients";
//import Categories from "./categories";
//import Type from "./type";
//import Contains from "./contains";
import ClassifyAs from "./classify-as";
import InputIngredient from "./input-ingredient"
import { API_BASE_URL } from "../config";
//import PostForm from "./post-form"
import { connect } from "react-redux";
import * as actions from "../actions";

export class PostDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: "",
      ingredients: this.props.ingredients
    };
    this._dishName = React.createRef();
    this._dishImage = React.createRef();
  }

  onSubmit = e => {
    console.log("clicked")
    e.preventDefault();
    console.log(this.props);  
    this.addCategory(e);
     this.setName();
     this.setState({
      display: "Success!"
    }); 
    setTimeout(this.postRequest, 1000); 
   
  };

  componentDidMount = () => {
    this.props.dispatch(actions.clearIngredients());
    this.props.dispatch(actions.clearCategories());
  }

  postRequest = () => {
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories
    }
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
    });
    this.props.dispatch(actions.clearIngredients());
  };

  setName = () => {
    const name = this._dishName.current.value;
    this.setState({
        name
    });
  }

  setImage = () => {
    const image = this._dishImage.current.value;
    this.setState({
          image
    });
  }

  addCategory = (e) => {
    const checkboxes = e.currentTarget.getElementsByClassName(
      "classify-as-checkbox"
    );
  
    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        
        this.props.dispatch(actions.addCategory(checkbox.value))
      }
      return checkbox.value;
    });

  
  };

  render = () => {
     //console.log(this.props);
    if (this.state.display === "landing") {
      return (
        <div>
          <p> Please add a dish by entering the following information </p>
          <form onSubmit={this.onSubmit}>
          <label htmlFor="dish-name">Name of dish</label>
          <input
            className="input my-text"
            type="text"
            placeholder="e.g. Burger Deluxe"
            ref={this._dishName}
            required
          />

          <fieldset className="margin-bottom">
            <legend> Add Ingredients </legend>
            <InputIngredient/>
          </fieldset>

          <ClassifyAs/>
          <label htmlFor="dish-img">Choose an image for the dish!</label>
          <input type="file" className="choose-file-button" ref={this.props.ref} />

          <button type="submit" className="button">
            {" "}
            Post Dish!{" "}
          </button>
        </form>
        </div>
      );
    } //if
    else if (this.state.display === "Success!") {
      return (
        <div>
          <h1> Success! </h1>
          <h2> Dish Name: {this.state.name}</h2>

          <h2>
            {" "}
            Ingredients: <Ingredients
              ingredients={this.props.ingredients}
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

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories
});

export default connect(mapStateToProps)(PostDish);