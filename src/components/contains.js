import React from "react";

const Contains = props => (
  <div>
    <label htmlFor="scroll"> Has {props.name}?</label>

    <select className="scroll" required>
      <option className="option" value="yes">
        Yes
      </option>
      <option value="no">No</option>
    </select>
  </div>
);

export default Contains;
