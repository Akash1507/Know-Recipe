import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Recipe from "../components/Recipe";
import App from "../App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/recipe/:id" component={Recipe}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
