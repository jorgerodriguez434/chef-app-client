import React from "react";
import * as menu from "../menu";

export default class Testing extends React.Component {
  constructor() {
    super();
    this.state = {
      noMeat: [],
      noDairy: [],
      noEgg: [],
      noGluten: [],
      meat: []
    };
    this.food = [
      menu.fatpourBurger,
      menu.badgerBurger,
      menu.blackhawkBurger,
      menu.wings
    ];
  }

  filterFood = () => {
    const noMeat = [];
    const noDairy = [];
    const noEgg = [];
    const noGluten = [];
    const meat = [];
    this.food.map(dish => {
      if (dish.hasMeat === false) {
        noMeat.push(dish);
      }
      if (dish.hasDairy === false) {
        noDairy.push(dish);
      }
      if (dish.hasEgg === false) {
        noEgg.push(dish);
      }
      if (dish.hasGluten === false) {
        noGluten.push(dish);
      }
      if (dish.hasMeat === true) {
        meat.push(dish);
      }
      return dish;
    });

    this.setState({
      noMeat,
      noDairy,
      noEgg,
      noGluten,
      meat
    });
  };

  render = () => {
    console.log(this.state);
    return (
      <div>
        <h2> Hello there </h2>
        <p> filter the menu </p>
        <p> okay here I go! </p>

        <h2> This is the Checkboxes component</h2>
        <form onChange={this.foodFilter}>
          <label htmlFor="no-meat"> No meat </label>
          <input
            className="no-meat"
            value="no-meat"
            type="checkbox"
            name="no-meat"
          />
          <label htmlFor="dairy"> Meat</label>
          <input className="dairy" value="dairy" type="checkbox" name="dairy" />
          <label htmlFor="no-gluten"> Gluten Free</label>
          <input
            className="no-gluten"
            value="no-gluten"
            type="checkbox"
            name="no-gluten"
          />
        </form>

        <button type="submit" onClick={this.filterFood}>
          {" "}
          display{" "}
        </button>
        <h2> No Meat Items: </h2>
        <h3>
          {" "}
          {this.state.noMeat.map((dish, index) => {
            return (
              <li key={index}>
                <h2> {dish.name} </h2>
                <img src={dish.image} alt={dish.name} />
              </li>
            );
          })}
        </h3>
        <h2> Dairy Free Items: </h2>
        <h3>
          {" "}
          {this.state.noDairy.map((dish, index) => {
            return (
              <li key={index}>
                <h2> {dish.name} </h2>
                <img src={dish.image} alt={dish.name} />
              </li>
            );
          })}
        </h3>
        <h2> Gluten Free Items: </h2>
        <h3>
          {" "}
          {this.state.noGluten.map((dish, index) => {
            return (
              <li key={index}>
                <h2> {dish.name} </h2>
                <img src={dish.image} alt={dish.name} />
              </li>
            );
          })}
        </h3>
      </div>
    );
  };
}
