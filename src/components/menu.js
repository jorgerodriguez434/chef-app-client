import React from "react";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
import { API_BASE_URL } from "../config";
import Links from "./links"
import {connect} from "react-redux";
import "./menu.css";
import { Redirect } from 'react-router-dom'

export class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      menu: [],
      noMeatDishes: [],
      noDairyDishes: [],
      noEggDishes: [],
      noGlutenDishes: [],
      meatDishes: [],
      veganDishes: [],
      display:"landing"
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("token"));
    const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer${localStorage.getItem("token")}`);
    fetch(API_BASE_URL, {headers:  myHeaders})
      .then(res => res.json())
      .then(
        dishes => {
         if (localStorage.getItem("isAuthenticated")){
          this.setState({
            isLoaded: true,
            menu: dishes,
          });
        }
       else {
          this.setState({
            display: "login"
          });
        }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ).then(() => this.foodFilter());
} 

  foodFilter = () => {
    
    const noMeatDishes = [];
    const noDairyDishes = [];
    const noEggDishes = [];
    const noGlutenDishes = [];
    const meatDishes = [];
    const dairyDishes = [];
    const eggDishes = [];
    const glutenDishes = [];
    const veganDishes = [];

    this.state.menu.map(dish => {
      if (dish.categories.indexOf("contains-meat") !== -1) meatDishes.push(dish);
      else if(dish.categories.indexOf("contains-meat") === -1) noMeatDishes.push(dish);
      if (dish.categories.indexOf("contains-gluten") !== -1) glutenDishes.push(dish);
      else if(dish.categories.indexOf("contains-gluten") === -1) noGlutenDishes.push(dish)
      if (dish.categories.indexOf("contains-dairy") !== -1) dairyDishes.push(dish);
      else if (dish.categories.indexOf("contains-dairy") === -1) noDairyDishes.push(dish);
      if (dish.categories.indexOf("contains-egg") !== -1) eggDishes.push(dish);
      else if (dish.categories.indexOf("contains-egg") === -1) noEggDishes.push(dish); 
      if (dish.categories.indexOf("contains-egg") === -1 && dish.categories.indexOf("contains-dairy") === -1 && dish.categories.indexOf("contains-meat") === -1 ) veganDishes.push(dish);

      return dish;
    }); 

    this.setState({
          noMeatDishes,
          noDairyDishes,
          noEggDishes,
          noGlutenDishes,
          meatDishes,
          dairyDishes,
          eggDishes,
          glutenDishes,
          veganDishes
    });  
      
  };


  displayNoMeat = () => {
    this.setState({
      display: "no meat"
    });
    console.log("no meat:");
    console.log(this.state.noMeatDishes);
  };
  displayMeat = () => {
   this.setState({
    display: "meat"
  });
    console.log("meat:");
    console.log(this.state.meatDishes);
  };
  displayNoGluten = () => {
    this.setState({
      display: "no gluten"
    });
    console.log("no gluten:");
    console.log(this.state.noGlutenDishes);
  };

  displayNoEgg = () => {
    this.setState({
      display: "no egg"
    });
    console.log("no egg:");
    console.log(this.state.noEggDishes);
  };

  displayNoDairy = () => {
    this.setState({
      display: "no dairy"
    });
    console.log("no dairy:");
    console.log(this.state.noDairyDishes);
  };

  displayVegan = () => {
   this.setState({
    display: "vegan"
  });
    console.log("vegan:");
    console.log(this.state.veganDishes);
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
      <div className="">
        <Links/>
        <div className="intro-image"> 
              <h1> MENU </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
        </div>
     </section>
      </div>
      );
    } else if (this.state.display=== "no meat") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no meats: </h3>
          <Dishes category={this.state.noMeatDishes} />
        </div>
        </section>
        </div>
      );
    } else if (this.state.display === "meat") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing meats: </h3>
        <div aria-live="polite" className="list-of-dishes">
          <Dishes category={this.state.meatDishes} />
        </div>
        </div>
        </section>
        </div>
      );
    } else if (this.state.display === "no gluten") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no gluten: </h3>
          <Dishes category={this.state.noGlutenDishes} />
        </div>
        </section>
        </div>
      );
    } //else if
    else if (this.state.display === "no egg") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
           <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no egg: </h3>
          <Dishes category={this.state.noEggDishes} />
         
        </div>
        </section>
        </div>
      );
    }//else if
    else if (this.state.display === "no dairy") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
        <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing no dairy: </h3>
          <Dishes category={this.state.noDairyDishes} />
         
        </div>
        </section>
        </div>
      );
    }//else if
    else if (this.state.display === "vegan") {
      return (
        <div>
          <Links/>
        <div className="intro-image"> 
              <h1> Menu </h1>
        </div>
      <section className="background-for-button-group">
        <div className="button-group-container">
          <ButtonGroup
            displayNoEgg = {this.displayNoEgg}
            displayVegan = {this.displayVegan}
            displayNoDairy = {this.displayNoDairy}
            displayNoMeat={this.displayNoMeat}
            displayMeat={this.displayMeat}
            displayNoGluten={this.displayNoGluten}
          />
          <h3> Showing vegan: </h3>
          <Dishes category={this.state.veganDishes} />
        </div>
      </section>
      </div>
      );
    }//else if
    else if(this.state.display === "login") return <Redirect to='/login'/>
  }; //render
} //class


export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Menu);
