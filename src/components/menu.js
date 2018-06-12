import React from "react";
import * as menu from "../menu";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
import GlutenFreeDishes from "./gluten-free-dishes";


/*

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
*/




export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      all: [],
      noMeat: [],
      noDairy: [],
      noEgg: [],
      noGluten: [],
      meat: [],
      display: "buttons"
    };
    this.food = [
      menu.fatpourBurger,
      menu.badgerBurger,
      menu.blackhawkBurger,
      menu.wings
    ];
  }

  componentDidMount() {
    fetch("https://thawing-ravine-79238.herokuapp.com/api/dishes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            all: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  foodFilter = () => {
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

  displayNoMeat = () => {
    this.setState({
      display: "no meat"
    });
  };
  displayMeat = () => {
    this.setState({
      display: "meat"
    });
  };
  displayNoGluten = () => {
    this.setState({
      display: "no gluten"
    });
  };

  render = () => {
    if (this.state.display === "buttons") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
        </div>
      );
    } else if (this.state.display === "no meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no meats: </h3>
          <Dishes category={this.state.noMeat} />
        </div>
      );
    } else if (this.state.display === "meat") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing meats: </h3>
          <Dishes category={this.state.meat} />
        </div>
      );
    } else if (this.state.display === "no gluten") {
      return (
        <div>
          <ButtonGroup
            foodFilter={this.foodFilter}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no gluten: </h3>
          <GlutenFreeDishes category={this.state.noGluten} />
        </div>
      );
    }
  }; //render
} //class
