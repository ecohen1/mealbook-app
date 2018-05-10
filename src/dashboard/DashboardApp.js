import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import * as firebase from "firebase";

import SimpleAppBar from '../common/SimpleAppBar'
import StatusList from './StatusList'
import RecipeList from './RecipeList'
import PaperSheet from '../common/PaperSheet'

import recipes from '../common/recipes'

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
    hasPersonalized: true,
    username: 'test'
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        //get meals for user
        var meals = userData.meals;
        //see whether user has filled out personalization form
        var hasPersonalized = userData.hasPersonalized;
        //set new state
        self.setState({meals, hasPersonalized})
      } else {
        self.setState({hasPersonalized: false})
      }
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar loggedIn={this.state.hasPersonalized}/>
        <br></br>
        <StatusList />
        <RecipeList recipes={recipes}/>
      </div>
    )
  }
}

export default DashboardApp;
