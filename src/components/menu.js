import React from "react";
import FatpourBurger from "./fatpour-burger";
import BadgerBurger from "./badger-burger";
import BlackhawkBurger from "./blackhawk-burger";

export default function Menu() {
  return (
    <div>

      <h1> Lets get started! </h1>
      <h3> Menu </h3>
      <p> Click on an item to see it </p>
      <FatpourBurger />
      <BadgerBurger />
      <BlackhawkBurger />
    </div>
  );
}
