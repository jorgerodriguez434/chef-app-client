import React from "react";
//import Burger from "./burger";
//import * as menu from "../menu";
import Checkboxes from "./checkboxes"

export default function Menu() {
  return (
    <div>
      <h1> Lets get started! </h1>
      <h3> Menu </h3>
      <p> Click on an item to see it </p>
      <Checkboxes/>

    </div>
  );
}

/*
<Burger name={menu.fatpourBurger.name} image={menu.fatpourBurger.image} />
<Burger name={menu.badgerBurger.name} image={menu.badgerBurger.image} />
<Burger
  name={menu.blackhawkBurger.name}
  image={menu.blackhawkBurger.image}
/>
*/
