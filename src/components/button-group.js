import React from "react";

const ButtonGroup = (props) => (
  <div>
    <button className="button" onClick={props.foodFilter}> FILTER </button>
    <button className="button" onClick={props.categorizeIngredients}> CATEGORIZE INGRED </button>
    <button className="button" onClick={props.displayNoMeat}> NO MEAT </button>
    <button className="button" onClick={props.displayMeat}> MEAT </button>
    <button className="button" onClick={props.displayNoGluten}> GLUTEN FREE </button>
    <button className="button" onClick={props.displayIngredients}> SHOW INGREDIENTS </button>
</div>
);

export default ButtonGroup;
