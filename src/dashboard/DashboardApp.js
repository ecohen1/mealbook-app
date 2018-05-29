import React from 'react';

import track from 'react-tracking';

import * as firebase from "firebase";

import RecipeApp from '../recipes/RecipeApp'

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  }
};

@track((props) => {return { page: 'DashboardPage', username: props.search.user }}, { dispatchOnMount: true })
class DashboardApp extends React.Component {
  state = {
    meals: [
    ],
    username: this.props.search.user
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
        <RecipeApp search={this.props.search} />
      </div>
    )
  }
}

export default DashboardApp;
