import React from "react";
import Table from "./table";

const Seating = () => (
  <div>
    <h2> This is the seating chart! </h2>
    <p> Reserve your seats! Pick any table! </p>
    <Table className="red" number="1"/>
    <Table number="2"/>
    <Table number ="3"/>
  </div>
);

export default Seating;
