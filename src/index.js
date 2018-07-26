import React from "react";
import { render } from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login-form";
import Menu from "./components/menu";
import Home from "./components/home";
import Seating from "./components/seating";
import PostDish from "./components/post-dish";
import "./index.css";
import RegistrationForm from "./components/registration-form";
import SuccessUpdated from "./components/success-updated";
import UpdateDish from "./components/update-dish";
import Dish from "./components/dish";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
    <div>
    
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/seating" component={Seating} />
          <Route exact path="/post-dish" component={PostDish} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/success-updated" component={SuccessUpdated} />
          <Route exact path="/update-dish" component={UpdateDish} />
          <Route exact path="/dish" component={Dish} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
