import React from "react";
import ClassifyAs from "./classify-as"

export default class SingleInputIngredient extends React.Component {
    
    render = () => {
        return(
        <li key={this.props.index}>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              className="input my-text"
              type="text"
              placeholder="e.g. tomato"
            />
            <ClassifyAs/>
          </li>
        );
    }
}

