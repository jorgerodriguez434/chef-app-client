import React from "react";

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = { reserved: false, buttonName: "Reserve" };
  }
  handleReserve = () => {
    console.log(`table ${this.props.number} has been clicked!`);
    this.setState({
      reserved: true,
      classColor: "red",
      buttonName: "cancel"
    });
  };
  handleCancel = () => {
    console.log(`table ${this.props.number} has been clicked!`);
    this.setState({
      reserved: false,
      classColor: "white",
      buttonName: "reserve"
    });
  };

  render() {
    if (this.state.reserved === false) {
      return (
        <div className="table-row">
          <h2> This is a table </h2>
          <div className={`table ${this.state.classColor}`} onClick={this.handleReserve}>
            <p>Table </p>
            <p> {this.props.number} </p>
          </div>
          <button className="button" onClick={this.handleReserve}>
            {" "}
            {this.state.buttonName}{" "}
          </button>
        </div>
      );
    }//if
    else if (this.state.reserved === true) {
      return (
        <div className="table-row">
          <h2> This is a table </h2>
          <div className={`table ${this.state.classColor}`} onClick={this.handleCancel}>
            <p>Table </p>
            <p> {this.props.number} </p>
          </div>
          <button className="button" onClick={this.handleCancel}>
            {" "}
            {this.state.buttonName}{" "}
          </button>
          <h5> How many guests will be accompanying you? </h5>
          <input className="input my-text"/>
        </div>
      );
    }//if
  }
}

/*



*/
