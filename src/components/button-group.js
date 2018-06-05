import React from "react";

const ButtonGroup = (props) => (
  <div>
    <button onClick={props.method1}> filter button </button>
    <button onClick={props.method2}> no meat button </button>
    <button onClick={props.method3}> meat button </button>
    <button onClick={props.method4}> no gluten button </button>
</div>
);

export default ButtonGroup;
