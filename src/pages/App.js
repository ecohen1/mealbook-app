import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import SimpleAppBar from './SimpleAppBar'
import FullWidthTabs from './FullWidthTabs'
import PersonalizeButton from './PersonalizeButton'

import * as firebase from "firebase";

const styles = {
  root: {
    width: "100%",
  }
};

class App extends React.Component {
  state = {
    meals: [
    ],
    hasPersonalized: true,
    username: this.props.location.search.substring(1)
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  writeUserData = (userId, forms) => {
    firebase.database().ref('users/' + userId).set({
      forms: forms
    });
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

  updateDB = () => {
    this.writeUserData(this.state.username, this.state.forms)
  }

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar/>
        {this.state.hasPersonalized ? '' : <PersonalizeButton />}
        <FullWidthTabs meals={this.state.meals}/>
      </div>
    )
  }
}

export default App;
