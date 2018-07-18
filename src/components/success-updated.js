import React from "react";
import { connect } from "react-redux";
//import * as actions from "../actions";
import { Redirect } from "react-router-dom";

export class SuccessUpdated extends React.Component {

    constructor(){
        super();
          this.state = {
                display: "success"
          }
  
      }
      
      goBack = () => {
            this.setState({
                display: "menu"
            })
      }
  
   

    render = () => {

        if (this.state.display === "success"){
        return (

            <div> 
                     <h1> Success! </h1>
                     <button className="button" onClick={this.goBack}> GO BACK </button>
            </div>
        );
    }
    else if(this.state.display === "menu") return <Redirect to="/menu" />;
        

    }
}


export const mapStateToProps = state => ({
    state
  });
  
  export default connect(mapStateToProps)(SuccessUpdated);
  