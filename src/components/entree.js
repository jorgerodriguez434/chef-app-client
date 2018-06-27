import React from "react";
import Ingredients from "./ingredients";

const Entree = props => (
    <li key={props.index} className="dish">
    <h2> {props.name} </h2>
    <img src={props.imagee} alt={props.name} />
    <Ingredients ingredients={props.ingredients} />

    <button className="button" onClick={props.setUpdate}>
      {" "}
      UPDATE{" "}
    </button>
    <button className="button"> DELETE </button>
  </li>
);

export default Entree;
