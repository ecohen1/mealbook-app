import React from 'react';
import Button from '@material-ui/core/Button';
import Autorenew from '@material-ui/icons/Autorenew';

import TestGraphs from './TestGraphs'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  syncButton: {
    width: '15%',
    marginLeft: '42%'
  },
  card: {
    width: '80%',
    margin: 'auto'
  },
};

class TrackingApp extends React.Component {
  state = {
    meals: [
    ],
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
  //       //set new state
  //       self.setState({meals})
  //     }
  //   });
  // }

  render() {
    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <CardContent>

            <Button variant="raised" color="primary" style={styles.syncButton}>
              <Autorenew />
              &nbsp;&nbsp;Sync with device
            </Button>
            <TestGraphs />

          </CardContent>
        </Card>
      </div>
    )
  }
}

export default TrackingApp;