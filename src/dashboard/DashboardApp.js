import React from 'react';

import * as firebase from "firebase";

import StatusList from './StatusList'
import RecipeList from './RecipeList'

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  }
};

class DashboardApp extends React.Component {
  state = {
    meals: [
    ],
    username: 'demo'
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        //get meals for user
        var meals = userData.meals;
        //see whether user has filled out personalization form

        //set new state
        firebase.database().ref('recipes/').once('value').then(function(snapshot) {
          if (snapshot.val()) {
            let recipeData = snapshot.val();
            var userRecipes = []
            for (var recipeKey in recipeData) {
              if (meals.indexOf(recipeKey) >= 0) {
                userRecipes.push(recipeData[recipeKey])
              }
            }
            self.setState({meals: userRecipes})
          }
        });
      }
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <StatusList />
        <RecipeList recipes={this.state.meals}/>
      </div>
    )
  }
}

export default DashboardApp;
