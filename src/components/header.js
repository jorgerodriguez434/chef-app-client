import React from "react";

const Header = props => (
    <div>
  <header role="banner">
<div className="get-started-container">
  <button onClick={props.onClick} className="get-started-button">GET STARTED</button>
  </div>
  </header>
  
  </div>
);

export default Header;
