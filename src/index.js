import React from "react";
import { render } from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from "./components/login-form";
import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import Home from "./components/home";
import Seating from "./components/seating";

import "./index.css";
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/seating">Seating</Link>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/seating" component={Seating} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
