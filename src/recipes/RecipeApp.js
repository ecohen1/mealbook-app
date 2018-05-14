import React from 'react';
import FullWidthTabs from './FullWidthTabs'

import * as firebase from "firebase";

// import recipes from '../common/recipes';

const styles = {
  root: {
    width: "100%",
  }
};

class RecipeApp extends React.Component {
  state = {
    meals: [

    ],
    // username: this.props.location.search.substring(1)
    username: 'demo'
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  // writeUserData = (userId, forms) => {
  //   firebase.database().ref('users/' + userId).set({
  //     forms: forms
  //   });
  // }

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
        <FullWidthTabs meals={this.state.meals}/>
      </div>
    )
  }
}

export default RecipeApp;
