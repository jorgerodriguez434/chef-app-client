import React from "react";

const Type = props => (
  <div>
    <label htmlFor="type">Type</label>
            <div className="scroll">
              <select className="scroll" required>
                <option className="option" value="Burger">
                  Burger
                </option>
                <option value="Salad">Salad</option>
                <option value="Wings">Wings</option>
              </select>
            </div>
  </div>
);

export default Type;
