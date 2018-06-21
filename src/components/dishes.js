import React from "react";
import Ingredients from "./ingredients";
import Dish from "./dish";

export default class Dishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          {this.props.category.map((dish, index) => { //from menu.js the props  <Dishes category={this.state.noMeatDishes} />
            return (
              <Dish 
                dishId = {dish._id}
                key={index}
                index={index}
                dish={dish}
                name={dish.name}
                dishImage={dish.image}
                ingredients={dish.ingredients}
                categories = {dish.categories}
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
                <button className="button"> cancel </button>
              </li>
            );
          })}
        </ul>
      ); //return
    }
  };
}

