import React from "react";
import Ingredients from "./ingredients";

export default class Dish extends React.Component {
    
    clickUpdate = () => {
        /*
          trying to get the parent div id
          on click grab the current div and id
          how to do this?
          
          key={index}
                dish={dish}
                name={dish.name}
                dishImage={dish.image}
                ingredients={dish.ingredients}
        */
       console.log("update button");
       console.log(this.props.name)
       
      }

  render = () => {
    return (
      <li key={this.props.index} className="dish">
        <h2> {this.props.name} </h2>
        <img src={this.props.dishImage} alt={this.props.name} />
        <Ingredients ingredients={this.props.ingredients} />

        <button className="button" onClick={this.clickUpdate}>
          {" "}
          update{" "}
        </button>
        <button className="button"> delete </button>
      </li>
    );
  };
}
