import React from "react";


export default class AddIngredients extends React.Component {


    render = () => {
       return (
           
        <ul> {this.props.ingredients.map((ingredient, index) => {
            return(
                
            
          
              <li key={index} className="add-ingredient" >
                 {ingredient}
              </li>
        
            
            );
              
          })} </ul>
        
       );
    }
}
