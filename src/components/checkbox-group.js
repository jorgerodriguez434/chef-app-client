import React from "react";

const CheckboxGroup = (props) => (
  <div>
    <label htmlFor="filter"> Filter </label>
    <input onChange={props.method1}  type="checkbox" />
    <label htmlFor="no-meat"> No meat </label>
    <input onChange={props.method2}  type="checkbox" />
    <label htmlFor="meat"> Meat </label>
    <input onChange={props.method3} type="checkbox" />
    <label htmlFor="no-gluten"> No gluten </label>
    <input onChange={props.method4} type="checkbox" />
</div>
);

export default CheckboxGroup;
