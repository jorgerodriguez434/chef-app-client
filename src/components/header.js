import React from "react";

const Header = props => (
    <div>
  <header role="banner">

  <button onClick={props.onClick} className="button">GET STARTED</button>

  </header>
  
  </div>
);

export default Header;
