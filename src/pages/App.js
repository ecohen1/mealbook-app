import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import SimpleAppBar from './SimpleAppBar'
import FullWidthTabs from './FullWidthTabs'

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

const styles = {
  root: {
    width: "100%"
  }
};

class App extends React.Component {
  state = {
    meals: [
    ],
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
      var meals = snapshot.val() ? snapshot.val().meals : [];
      self.setState({meals})
      console.log(self.state)
    });
  }

  updateDB = () => {
    this.writeUserData(this.state.username, this.state.forms)
  }

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar/>
        <FullWidthTabs meals={this.state.meals}/>
      </div>
    )
  }
}

export default App;
