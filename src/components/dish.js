import React from "react";

const Dish = (props) => (
<ul>
    {props.category.map((dish, index) => {
            console.log(dish);
            return(
            <li key={index}>
            <h2> {dish.name} </h2>
             <img src={dish.image} alt={dish.name}/>
            </li>);

    })}

</ul>
);

export default Dish;

/*



<div>
<button onClick={this.foodFilter}> filter button </button>
<button onClick={this.displayNoMeat}> no meat button </button>
  <button onClick={this.displayMeat}> meat button </button>
  <button onClick={this.displayNoGluten}> no gluten button </button>
<h3> Showing no meats: </h3>
<ul>
    {this.state.noMeat.map((dish, index) => {
            console.log(dish);
            return(
            <li key={index}>
            <h2> {dish.name} </h2>
             <img src={dish.image} alt={dish.name}/>
            </li>);

    })}

</ul>
</div>

*/
