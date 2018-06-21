import React from "react";
import Ingredients from "./ingredients";
import UpdateDish from "./update-dish";
import Dish from "./dish";

export default class Dishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category, //from menu.js
      display: "landing"
    };
  }

  update = () => {
    //put request
  };
  setUpdate = () => {
    this.setState({
      display: "update"
    });
  };

  delete = () => {
    //delete request
  };

  clickUpdate = () => {
    /*
        trying to get the parent div id
        on click grab the current div and id
        how to do this?
      */
    console.log("clicked");
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <ul>
          {this.state.category.map((dish, index) => {
            return (
              <Dish 
                key={index}
                index={index}
                dish={dish}
                name={dish.name}
                dishImage={dish.image}
                ingredients={dish.ingredients}
              />
            );
          })}
        </ul>
      ); //return
    } //if
    if (this.state.display === "update") {
      return (
        <ul>
          {this.state.category.map((dish, index) => {
            return (
              <li key={index} className="dish">
                <h2> {dish.name} </h2>
                <img src={dish.image} alt={dish.name} />
                <Ingredients ingredients={dish.ingredients} />
                <UpdateDish />
                <button className="button"> cancel </button>
              </li>
            );
          })}
        </ul>
      ); //return
    }
  };
}

