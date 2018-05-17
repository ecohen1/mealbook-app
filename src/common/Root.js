import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeApp from '../recipes/RecipeApp';
import AdminApp from '../admin/AdminApp';
import RecipeInfoApp from '../recipeInfo/RecipeInfoApp';
import DashboardApp from '../dashboard/DashboardApp'
import TrackingApp from '../tracking/TrackingApp'
import ProfileApp from '../profile/ProfileApp'
import LoginForm from '../common/LoginForm'
import SimpleAppBar from '../common/SimpleAppBar'

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  storageBucket: "mealbook-app.appspot.com",
};
firebase.initializeApp(config);


class Root extends React.Component {
  state = {
    search: {}
  };

  componentDidMount() {
    let search = {}
    window.location.search.substring(1).split('&')
              .filter((param) => param != "")
              .map((param) => {
                return param.split("=")
              })
              .forEach((paramPair) => {
                search[paramPair[0]] = paramPair[1]
              })
    this.setState({search})
  }

  login = () => {
    localStorage.setItem(this.state.search.user + 'LoggedIn', true)
    window.location.reload()
  }

  logout = () => {
    localStorage.removeItem(this.state.search.user + 'LoggedIn')
  }

  render() {
    return (
      <div>
        {localStorage.getItem(this.state.search.user + 'LoggedIn') ?
          <div>
            <SimpleAppBar loggedIn={true} logout={this.logout}/>
            <Router>
              <Switch>
                <Route path="/" component={DashboardApp} exact />
                <Route path="/recipes" component={RecipeApp} exact />
                <Route path="/admin" component={AdminApp} exact />
                <Route path="/recipe-info" component={RecipeInfoApp} exact />
                <Route path="/tracking" component={TrackingApp} exact />
                <Route path="/profile" component={ProfileApp} exact />
              </Switch>
            </Router>
          </div>
          :
          <LoginForm login={this.login} user={this.state.search.user}/>
        }
      </div>
    );
  }
};

export default Root;
