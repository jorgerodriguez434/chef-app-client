import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";

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
    console.log(this.props.dishId);
    console.log(this.state.name);
    console.log(this.state.categories);
    if (this.state.display === "landing") {
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.props.name} </h2>
          <img src={this.props.dishImage} alt={this.props.name} />
          <Ingredients ingredients={this.props.ingredients} />

          <button className="button" onClick={this.setUpdate}>
            {" "}
            update{" "}
          </button>
          <button className="button"> delete </button>
        </li>
      );
    } //if
    if (this.state.display === "set update") {
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.props.name} </h2>
          <img src={this.props.dishImage} alt={this.props.name} />
          <Ingredients ingredients={this.props.ingredients} />
          <p> update name </p>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="input my-text"  value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          <p> update ingredients </p>
          <input type="text" className="input my-text" value={this.state.ingredients} onChange={this.handleIngredientsChange.bind(this)}/>
          <p> update categories </p>
          <input type="text" className="input my-text" value={this.state.categories} onChange={this.handleCategoriesChange.bind(this)}/>
          <button type ="submit" className="button"> confirm </button>
          <button className="button" onClick={this.cancel}> cancel </button>
        </form>
        </li>
      );
    } //if
  };
}
