import React from "react";
import Ingredients from "./ingredients";
import { API_BASE_URL } from "../config";
//import Type from "./type";
//import InputIngredient from "./input-ingredient"; 
import UpdateIngredients from "./update-ingredients"; 
import ClassifyAs from "./classify-as";
import { connect } from "react-redux";
import * as actions from "../actions";

export class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landing", 
       name: this.props.stateName, //need to pass these becasue it is for every individual dish
       ingredients: this.props.stateIngredients,
       categories: this.props.stateCategories
    };
  }

  setUpdate = () => {
    this.setState({
      display: "set update"
    });
    console.log("update button clicked!");
  
  };

 goBack = () => {
    this.setState({
        display: "landing"
      });

 }

  handleNameChange = (e) => {

    this.setState({
            name: e.target.value
    });
  }
  

  onSubmit = (e) => {
      e.preventDefault();
      console.log("submitted!");
      this.addCategory(e);
      setTimeout(this.putRequest, 1000); 
  }
  

  putRequest = () => {
    const data = {
      name: this.state.name,
      ingredients: this.props.ingredients,
      categories: this.props.categories
    }

    this.setState({
      ingredients: this.props.ingredients
    });

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

  addCategory = e => {
    this.props.dispatch(actions.clearCategories());
    const checkboxes = e.currentTarget.getElementsByClassName(
      "classify-as-checkbox"
    );
  
    Object.values(checkboxes).map(checkbox => {
      if (checkbox.checked) {
        
        this.props.dispatch(actions.addCategory(checkbox.value))
      }
      return checkbox.value;
    }); 
  
  
  }; 
 
  render = () => {
    console.log(this.props);
    if (this.state.display === "landing") {
      return (
        <li key={this.props.index} className="dish">
          <h2> {this.state.name} </h2>
          <img src={this.props.dishImage} alt={this.state.name} />
          <Ingredients ingredients={this.state.ingredients} />

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
          <h2> {this.state.name} </h2>
          <img src={this.props.dishImage} alt={this.state.name} />
          <Ingredients ingredients={this.state.ingredients} />
        <div className="form">
          <form onSubmit={this.onSubmit} >
          <label htmlFor="dish-name">update name of dish</label>
          <input type="text" className="input my-text"  value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
  
          <fieldset className="margin-bottom">
            <legend> update Ingredients </legend>
            <UpdateIngredients stateIngredients={this.state.ingredients} stateCategories={this.state.categories}/>
            {/* 
      */}
          </fieldset>

          <ClassifyAs/>
          <label htmlFor="dish-img">Choose an image for the dish!</label>
          <input type="file" className="choose-file-button" ref={this.props.ref} />

          <button type="submit" className="button">
            {" "}
            update Dish!{" "}
          </button>
        </form>
        <button type="button" className="button" onClick={this.goBack}>
            {" "}
            cancel{" "}
          </button>
        </div>
        </li>
      );
    } //if
  };
}


export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  categories: state.categories,
});

export default connect(mapStateToProps)(Dish);