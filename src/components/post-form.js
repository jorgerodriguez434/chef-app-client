import React from "react";
import InputIngredient from "./input-ingredient";

import React from "react";

const Burger = (props) => (
     <div>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="dish-name">Name of dish</label>
          <input
            className="input my-text"
            type="text"
            placeholder="e.g. Burger Deluxe"
            ref={this.props.ref}
            required
          />
          <Type />

          <fieldset className="margin-bottom">
            <legend> Add Ingredients </legend>
            <InputIngredient/>
            
      </fieldset>
      <label htmlFor="dish-img">Choose an image for the dish!</label>
      <input type="file" className="choose-file-button" ref={this.props.ref} />

      <button type="submit" className="button">
        {" "}
        Post Dish!{" "}
      </button>
    </form>
  </div>
);

export default Burger;
