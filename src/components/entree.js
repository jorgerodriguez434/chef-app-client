import React from "react";
import Ingredients from "./ingredients";
import { connect } from "react-redux";
//import * as actions from "../actions";
import { Redirect } from "react-router-dom";
//return <Redirect to="/login" />;


export class Entree extends React.Component {

    constructor(){
        super();
          this.state = {
                display: "landing"
          }
  
       
      }

      onClick = () => {
          this.setState({
            display: "update dish"
          });
      }
     
     

    render = () => {
if (this.state.display === "landing"){
        return (

          <li key={this.props.index} className="dish">
          <h2> {this.props.name} </h2>
          <img src={this.props.image} alt={this.props.name} />
          <div className="ingredients">
          <Ingredients  ingredients={this.props.ingredients} />
        </div>
          <button className="dish-button" onClick={this.props.setUpdate}>
            {" "}
            UPDATE{" "}
          </button>
          <button className="dish-button" onClick={this.props.setDelete}> DELETE </button>
        </li>
        );
    }//if 
    else if (this.state.display === "update dish") return <Redirect to="/update-dish" />;
  }//render
}


export const mapStateToProps = state => ({
    state
  });
  
  export default connect(mapStateToProps)(Entree);
  
