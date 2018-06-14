import React from "react";

  const InputIngredients = props => (
    <ul>
      {" "}
      {props.ingredients.map((ingredient, index) => {
        return (
          <li key={index}>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text"
              type="text"
              ref={props.ref}
              placeholder="e.g. tomato"
            />
          </li>
        );
      })}{" "}
    </ul>
  );
  
  export default InputIngredients;
  

