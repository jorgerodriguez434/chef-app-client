import React from "react";
import "./home.css"
const Header = props => (
    <div>
  <header role="banner">
<div className="inside-header">
<h1> THE CHEF APP </h1>
  <button onClick={props.onClick} className="button">GET STARTED</button>
</div>
  </header>
  
  </div>
);

export default Header;
