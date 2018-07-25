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

 
  setUpdate = () => {
    this.setState({
      display: "update"
    });
  };


  render = () => {
    
    if (this.state.display === "landing") {
      return (
        <ul>
          {this.props.category.map((dish, index) => { //in menu.js the props  <Dishes category={this.state.noMeatDishes} />
            return (
              <Dish 
                dishId = {dish._id}
                key={index}
                index={index}
                dish={dish}
                stateName={dish.name}
                dishImage={dish.image}
                stateIngredients={dish.ingredients}
                stateCategories = {dish.categories}
              />
            );
          })}
        </ul>
      );
    }
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
      );
    }
  };
}