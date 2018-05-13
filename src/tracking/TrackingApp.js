import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import Autorenew from '@material-ui/icons/Autorenew';

import * as firebase from "firebase";

import SimpleAppBar from '../common/SimpleAppBar'
import TestGraphs from './TestGraphs'

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  syncButton: {
    width: '15%',
    marginLeft: '42%'
  }
};

class TrackingApp extends React.Component {
  state = {
    meals: [
    ],
    hasPersonalized: true,
    username: 'test'
  };

  // componentDidMount = () => {
  //   this.getUserData(this.state.username)
  // }
  //
  // getUserData = (userId) => {
  //   var self = this
  //   return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
  //     if (snapshot.val()) {
  //       let userData = snapshot.val();
  //       //get meals for user
  //       var meals = userData.meals;
  //       //see whether user has filled out personalization form
  //       var hasPersonalized = userData.hasPersonalized;
  //       //set new state
  //       self.setState({meals, hasPersonalized})
  //     } else {
  //       self.setState({hasPersonalized: false})
  //     }
  //   });
  // }

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar loggedIn={this.state.hasPersonalized}/>
        <Button variant="raised" color="primary" style={styles.syncButton}>
          <Autorenew />
          &nbsp;&nbsp;Sync with device
        </Button>
        <TestGraphs />
      </div>
    )
  }
}

export default TrackingApp;
