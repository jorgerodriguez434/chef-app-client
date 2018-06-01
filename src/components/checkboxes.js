import React from "react";
import * as menu from "../menu";

export default class Checkboxes extends React.Component {
  constructor() {
    super();
    this.state = {
      foodFilters: []
    };

    this.food = menu;
  }
  render = () => <h2> This is the Checkboxes component</h2>;
}
