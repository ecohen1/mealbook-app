import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeApp from '../recipes/RecipeApp';
import AdminApp from '../admin/AdminApp';
import RecipeInfoApp from '../recipeInfo/RecipeInfoApp';
import DashboardApp from '../dashboard/DashboardApp'

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  storageBucket: "mealbook-app.appspot.com",
};
firebase.initializeApp(config);

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DashboardApp} exact />
        <Route path="/recipes" component={RecipeApp} exact />
        <Route path="/admin" component={AdminApp} exact />
        <Route path="/recipe-info" component={RecipeInfoApp} exact />
      </Switch>
    </Router>
  );
};

export default Root;