import React from "react";

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = { reserved: false };
  }
  changeColor = () => {
    console.log(`table ${this.props.number} has been clicked!`);
    //change color 
  };

  render() {
    return (
      <div className="white">
        <h2> This is a table </h2>
        <div className="table" onClick={this.changeColor}>
          <p>Table </p>
          <p> {this.props.number} </p>
        </div>
      </div>
    );
  }
}
