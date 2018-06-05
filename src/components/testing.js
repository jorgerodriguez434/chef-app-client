import React from "react";
import * as menu from "../menu";
import ButtonGroup from "./button-group"

export default class Testing extends React.Component {
  constructor() {
    super();
    this.state = {
      noMeat: [],
      noDairy: [],
      noEgg: [],
      noGluten: [],
      meat: [],
      display: "buttons",
      checkboxes: "on"
    };
    this.food = [
      menu.fatpourBurger,
      menu.badgerBurger,
      menu.blackhawkBurger,
      menu.wings
    ];
  }

  foodFilter = () => {
    const noMeat = this.food.filter(dish => dish.hasMeat === false);
    const noDairy = this.food.filter(dish => dish.hasDairy === false);
    const noEgg = this.food.filter(dish => dish.hasEgg === false);
    const noGluten = this.food.filter(dish => dish.hasGluten === false);
    const meat = this.food.filter(dish => dish.hasMeat === true);

    this.setState({
      noMeat,
      noDairy,
      noEgg,
      noGluten,
      meat
    });

    console.log(this.state);
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

  onClick = () => {
    console.log("clicked!");
  }

  render = () => {

        if (this.state.display === "buttons") {
          return(
            <div>
            <ButtonGroup
                method1={this.foodFilter}
                method2={this.displayNoMeat}
                method3={this.displayMeat}
                method4 ={this.displayNoGluten}
            />
          </div>
          );
        }

        if (this.state.display === "no meat") {
          return(
            <div>
            <ButtonGroup
                method1={this.foodFilter}
                method2={this.displayNoMeat}
                method3={this.displayMeat}
                method4 ={this.displayNoGluten}
            />
            <h3> Showing no meats: </h3>
            <ul>
                {this.state.noMeat.map((dish, index) => {
                        console.log(dish);
                        return(
                        <li key={index}>
                        <h2> {dish.name} </h2>
                         <img src={dish.image} alt={dish.name}/>
                        </li>);

                })}

            </ul>
          </div>
          );
        }//no-meat

        if (this.state.display === "meat") {
          return(
            <div>
            <ButtonGroup
                method1={this.foodFilter}
                method2={this.displayNoMeat}
                method3={this.displayMeat}
                method4 ={this.displayNoGluten}
            />
            <h3> Showing meats: </h3>
            <ul>
                {this.state.meat.map((dish, index) => {
                        console.log(dish);
                        return(
                        <li key={index}>
                        <h2> {dish.name} </h2>
                         <img src={dish.image} alt={dish.name}/>
                        </li>);

                })}

            </ul>
          </div>
          );
        }//meat

        if (this.state.display === "no gluten") {
          return(
            <div>
            <ButtonGroup
                method1={this.foodFilter}
                method2={this.displayNoMeat}
                method3={this.displayMeat}
                method4 ={this.displayNoGluten}
            />
            <h3> Showing no gluten: </h3>
            <ul>
                {this.state.noGluten.map((dish, index) => {
                        console.log(dish);
                        return(
                        <li key={index}>
                        <h2> {dish.name} </h2>
                         <img src={dish.image} alt={dish.name}/>
                        </li>);
                })}

            </ul>
          </div>
          );
        }//meat


  }; //render
} //class
