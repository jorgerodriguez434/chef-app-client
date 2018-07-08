import React from "react";
import { render } from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login-form";
import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import Home from "./components/home";
import Seating from "./components/seating";
import PostDish from "./components/post-dish";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
    <div>
    
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/seating" component={Seating} />
          <Route exact path="/post-dish" component={PostDish} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
