import React from "react";
import Table from "./table";
import Links from "./links"

const Seating = () => (
  <div>
    <Links/>
    <h1> Component soon to come! </h1>
    <p> Reserve your seats! Pick any table! </p>
    <Table className="red" number="1"/>
    <Table number="2"/>
    <Table number ="3"/>
  </div>
);

export default Seating;
