import React from "react";

const ClassifyAs = props => (
  <div required>
    <label htmlFor="contains-meat" className="label-for-classify-as">
      {" "}
      Contains Meat{" "}
    </label>
    <input
      className="classify-as-checkbox"
      value="contains-meat"
      type="checkbox"
      name="contains-meat"
      id="contains-meat"
    />

    <label htmlFor="contains-gluten" className="label-for-classify-as">
      {" "}
      Contains Gluten
    </label>
    <input
      className="classify-as-checkbox"
      value="contains-gluten"
      type="checkbox"
      name="contains-gluten"
      id="contains-gluten"
    />
    <label htmlFor="contains-dairy" className="label-for-classify-as">
      {" "}
      Contains Dairy{" "}
    </label>
    <input
      className="classify-as-checkbox"
      value="contains-dairy"
      type="checkbox"
      name="contains-dairy"
      id="contains-dairy"
    />

    <label htmlFor="contains-egg" className="label-for-classify-as">
      {" "}
      Contains Egg
    </label>
    <input
      className="classify-as-checkbox"
      value="contains-egg"
      type="checkbox"
      name="contains-egg"
      id="contains-egg"
    />

    <label htmlFor="none-apply" className="label-for-classify-as">
      {" "}
      None apply
    </label>
    <input
      className="classify-as-checkbox"
      value="none-apply"
      type="checkbox"
      name="none-apply"
      id="none-apply"
    />
  </div>
);

export default ClassifyAs;
