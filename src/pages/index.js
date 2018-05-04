import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import AdminApp from '../admin/AdminApp';

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/admin" component={AdminApp} exact />
      </Switch>
    </Router>
  );
};

export default Root;
