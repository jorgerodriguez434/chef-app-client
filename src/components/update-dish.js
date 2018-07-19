import React from "react";
import { connect } from "react-redux";
//import * as actions from "../actions";
//import { Redirect } from "react-router-dom";
//return <Redirect to="/login" />;
import { RingLoader } from "react-spinners";
import Ingredients from "./ingredients";
import UpdateInputIngredient from "./update-input-ingredient";
import ClassifyAs from "./classify-as";

export class UpdateDish extends React.Component {

    constructor(){
        super();
          this.state = {
  
          }
  
          this._dishName = React.createRef();
      }

      handleNameChange = e => {
        this.setState({
          name: e.target.value
        });
        
      };
    
      handleImageChange = e => {
        this.setState({
          image: e.target.value
        });
      };
     

    render = () => {
        return (

            <li key={this.props.index} className="dish">
            <div className="name-and-image-and-ingredients" aria-live="polite">
                <h2> {this.props.stateName} </h2>
                <img src={this.props.dishImage} alt={this.props.stateName} />
                <div className="ingredients"> 
                <Ingredients ingredients={this.props.stateIngredients} />
                </div>
              </div>
            <section className="update-forms" aria-live="polite"> {/* in dish.css*/}
                <form className="update-ingredients-container"> {/*in update-ingredients.css*/}
                
                      <h2> Update Ingredients </h2>
                      <UpdateInputIngredient
                        stateIngredients={this.props.stateIngredients}
                        stateCategories={this.props.stateCategories}
                      />
        
      
                  </form>
               
                  <form onSubmit={this.onSubmit}>
                    <label htmlFor="dish-name">Update Name of Dish</label>
                    <input
                      type="text"
                      className="input my-text"
                      value={this.state.name}
                      onChange={this.handleNameChange.bind(this)}
                    />
      
                   
                    <ClassifyAs />
                    <label htmlFor="dish-img">Update Image!</label>
                <input
                  className="input my-text width-90"
                  type="text"
                  placeholder= "URL image"
                  value={this.state.image}
                  onChange={this.handleImageChange.bind(this)}
                 />
      
                    <button type="submit" className="button">
                      {" "}
                      UPDATE DISH!{" "}
                    </button>
                 
      
                  <p className="red-font"> {this.state.message}</p>
                  <div className="spinner">
                          <RingLoader
                            color={"#123abc"}
                            loading={this.state.isPending}
                          />
                        </div>
                  <button type="button" className="button" onClick={this.goBack}>
                    {" "}
                    CANCEL{" "}
                  </button>
                  </form>
                </section>
              </li>
        );
    }
}


export const mapStateToProps = state => ({
    state
  });
  
export default connect(mapStateToProps)(UpdateDish);
  