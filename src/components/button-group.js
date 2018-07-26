import React from "react";

const ButtonGroup = (props) => (
  <div className="button-group">
    <button className="button" onClick={props.displayNoMeat}> VEGETERIAN DISHES</button>
    <button className="button" onClick={props.displayVegan}> VEGAN DISHES </button> 
    <button className="button" onClick={props.displayNoGluten}> GLUTEN FREE DISHES</button>
    <button className="button" onClick={props.displayNoDairy}> DAIRY FREE DISHES </button>
    <button className="button" onClick={props.displayMeat}> MEAT DISHES </button>
  
</div>
);

export default ButtonGroup;