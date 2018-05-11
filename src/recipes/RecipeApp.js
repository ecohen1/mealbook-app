import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import SimpleAppBar from '../common/SimpleAppBar'
import FullWidthTabs from './FullWidthTabs'
import PersonalizeButton from '../common/PersonalizeButton'

import * as firebase from "firebase";

import recipes from '../common/recipes';

const styles = {
  root: {
    width: "100%",
  }
};

class RecipeApp extends React.Component {
  state = {
    meals: [
    ],
    hasPersonalized: true,
    username: this.props.location.search.substring(1)
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
        <SimpleAppBar/>
        {this.state.hasPersonalized || true ? '' : <PersonalizeButton />}
        <FullWidthTabs meals2={this.state.meals} meals={recipes}/>
      </div>
    )
  }
}

export default RecipeApp;