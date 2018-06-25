import React from "react";

const AddIngredients = props => (
  <ul> {props.ingredients.map((ingredient, index) => {
    return(
        
    
  
      <li key={index} className="add-ingredient" >
         {ingredient}
      </li>

    
    );
      
  })} </ul>
);

export default AddIngredients;