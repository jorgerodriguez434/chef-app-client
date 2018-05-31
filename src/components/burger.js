import React from "react";
import * as menu from "../menu";

const Burger = (props) => (
  <div>
    <h2> {props.name} </h2>
    <img src={props.image} alt={props.image} />
  </div>
);

export default Burger;
