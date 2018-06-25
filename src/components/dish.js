import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";
import Type from "./type";
//import InputIngredient from "./input-ingredient"; 
import UpdateIngredient from "./update-ingredient"; 
import ClassifyAs from "./classify-as";

export default class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing",
      name: this.props.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories
    };
  }

  setUpdate = () => {
    this.setState({
      display: "set update"
    });
    console.log("update button clicked!");
  
  };

 cancel = () => {
    this.setState({
        display: "landing"
      });
 }

  handleNameChange = (e) => {

    this.setState({
            name: e.target.value
    });
  }
  handleIngredientsChange = (e) => {
    this.setState({
            ingredients: e.target.value
    });
  }
  handleCategoriesChange = (e) => {
    this.setState({
            categories: e.target.value
    });
  }

/*

  onSubmit = e => {
    console.log("clicked")
    e.preventDefault();
    console.log(this.props);  
    this.addCategory(e);
     this.setName();
     this.setState({
      display: "hello world"
    }); 
    setTimeout(this.postRequest, 1000); 
   
  };
*/
  onSubmit = (e) => {
      e.preventDefault();
      console.log("submitted!");
      this.putRequest();
  }
//this.props.id is undefined
  putRequest = () => {
    const data = this.state;
    fetch(`${API_BASE_URL}/${this.props.dishId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }


  render = () => {
    console.log(this.state.name);
    if (this.state.display === "landing") {
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.state.name} </h2>
          <img src={this.props.dishImage} alt={this.state.name} />
          <Ingredients ingredients={this.state.ingredients} />

          <button className="button" onClick={this.setUpdate}>
            {" "}
            update{" "}
          </button>
          <button className="button"> delete </button>
        </li>
      );
    } //if
    if (this.state.display === "set update") {
      console.log(this.state.ingredients)
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.state.name} </h2>
          <img src={this.props.dishImage} alt={this.state.name} />
          <Ingredients ingredients={this.state.ingredients} />
        <div className="form">
          <form onSubmit={this.onSubmit} >
          <label htmlFor="dish-name">update name of dish</label>
          <input type="text" className="input my-text"  value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          <Type />

          <fieldset className="margin-bottom">
            <legend> update Ingredients </legend>
            <UpdateIngredient stateIngredients={this.state.ingredients} stateCategories={this.state.categories}/>
            {/* 
      */}
          </fieldset>

          <ClassifyAs/>
          <label htmlFor="dish-img">Choose an image for the dish!</label>
          <input type="file" className="choose-file-button" ref={this.props.ref} />

          <button type="submit" className="button">
            {" "}
            update Dish!{" "}
          </button>
        </form>
        </div>
        </li>
      );
    } //if
  };
}









/*
<form onSubmit={this.onSubmit}>
          <input type="text" className="input my-text"  value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          <p> update ingredients </p>
          <input type="text" className="input my-text" value={this.state.ingredients} onChange={this.handleIngredientsChange.bind(this)}/>
          <p> update categories </p>
          <input type="text" className="input my-text" value={this.state.categories} onChange={this.handleCategoriesChange.bind(this)}/>
          <button type ="submit" className="button"> confirm </button>
          <button className="button" onClick={this.cancel}> cancel </button>
        </form>

*/