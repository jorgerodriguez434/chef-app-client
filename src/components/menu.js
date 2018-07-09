import React from "react";
import ButtonGroup from "./button-group";
import Dishes from "./dishes";
import { API_BASE_URL } from "../config";
import Links from "./links"
import {connect} from "react-redux";
import "./menu.css";
import LoginForm from "./login-form"
import * as actions from "../actions";

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
    fetch(API_BASE_URL, {headers:  {"Authentication": `bearer {localStorage.getItem("token")}`}})
      .then(res => res.json())
      .then(
        dishes => {
        //console.log("api get request:");
         //console.log(dishes);
         if (localStorage.getItem("isAuthenticated")){
          this.setState({
            isLoaded: true,
            menu: dishes,
          });
          this.props.dispatch(actions.setDisplay("landing"));
        }
        else {
          this.props.dispatch(actions.setDisplay("login"));
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
      //dispatch add meat dish
      else if(dish.categories.indexOf("contains-meat") === -1) noMeatDishes.push(dish);
      //dispatch add no meat dish
      if (dish.categories.indexOf("contains-gluten") !== -1) glutenDishes.push(dish);
      //dispatch add gluten dishes
      else if(dish.categories.indexOf("contains-gluten") === -1) noGlutenDishes.push(dish)
       //dispatch add no gluten dishes
      if (dish.categories.indexOf("contains-dairy") !== -1) dairyDishes.push(dish);
       //dispatch dairy dishes
      else if (dish.categories.indexOf("contains-dairy") === -1) noDairyDishes.push(dish);
       //dispatch no dairy dishes
      if (dish.categories.indexOf("contains-egg") !== -1) eggDishes.push(dish);
       //dispatch egg gluten dishes
      else if (dish.categories.indexOf("contains-egg") === -1) noEggDishes.push(dish); 
       //dispatch no egg dishes
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
   
    this.props.dispatch(actions.setDisplay("no meat"));
    console.log("no meat:");
    console.log(this.state.noMeatDishes);
  };
  displayMeat = () => {
    //this.componentDidMount();
    this.props.dispatch(actions.setDisplay("meat"));
    console.log("meat:");
    console.log(this.state.meatDishes);
  };
  displayNoGluten = () => {
    this.props.dispatch(actions.setDisplay("no gluten"));
    console.log("no gluten:");
    console.log(this.state.noGlutenDishes);
  };

  displayNoEgg = () => {
  
    this.props.dispatch(actions.setDisplay("no egg"));
    console.log("no egg:");
    console.log(this.state.noEggDishes);
  };

  displayNoDairy = () => {

    //this.componentDidMount();
    this.props.dispatch(actions.setDisplay("no dairy"));
    console.log("no dairy:");
    console.log(this.state.noDairyDishes);
  };

  displayVegan = () => {
  
    //this.componentDidMount();
    this.props.dispatch(actions.setDisplay("vegan"));
    console.log("vegan:");
    console.log(this.state.veganDishes);
  };

  render = () => {
    //console.log(this.props);
    //console.log(this.state);
    if (this.props.state.display === "landing") {
      return (
      <div>
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
    } else if (this.props.state.display === "no meat") {
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
    } else if (this.props.state.display === "meat") {
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
          <Dishes category={this.state.meatDishes} />
        </div>
        </section>
        </div>
      );
    } else if (this.props.state.display === "no gluten") {
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
    else if (this.props.state.display === "no egg") {
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
    else if (this.props.state.display === "no dairy") {
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
    else if (this.props.state.display === "vegan") {
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
    else if(this.props.state.display === "login") return <LoginForm/>
  }; //render
} //class


export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(Menu);
