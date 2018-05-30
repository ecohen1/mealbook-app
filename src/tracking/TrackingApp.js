import React from 'react';

import track from 'react-tracking';

import {isMobile} from 'react-device-detect';

// import Autorenew from '@material-ui/icons/Autorenew';
import Add from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import * as firebase from "firebase";

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
  logTime: {
    marginLeft: '25%'
  },
  logDate: {
    marginLeft: '25%'
  },
  logValue: {

  },
  logTimeMobile: {
    marginLeft: '5%'
  },
  logDateMobile: {
    marginLeft: '5%'
  },
  logValueMobile: {

  }
};

@track((props) => {return { page: 'TrackingPage', username: props.search.user }}, { dispatchOnMount: true })
class TrackingApp extends React.Component {
  state = {
    loggingData: [
    ],
    username: this.props.search.user
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        if (userData.loggingData) {
          self.setState({loggingData: userData.loggingData})
        }
      }
    });
  }

  logBloodSugar = () => {
    var bloodSugarValue = prompt("Blood sugar value:", "");
    if (bloodSugarValue == null || bloodSugarValue === "") {
        alert('Need to enter a valid blood sugar value.')
        return 0;
    }

    var bloodSugarTime = prompt("Time of reading:", "");
    if (bloodSugarTime == null || bloodSugarTime === "") {
        alert('Need to enter a valid time.')
        return 0;
    }

    var loggingData = this.state.loggingData
    var date = (new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + (new Date().getYear()-100)
    loggingData.push({value: bloodSugarValue, time: bloodSugarTime, date: date})
    firebase.database().ref('users/'+this.state.username).update({
      loggingData
    }).then(() => window.location.reload());

  }

  render() {
    var reversedLoggingData = this.state.loggingData
    reversedLoggingData.reverse()
    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <CardContent>

            <Button variant="raised" color="primary" style={styles.syncButton} onClick={this.logBloodSugar}>
              <Add />
              &nbsp;&nbsp;Log blood sugar
            </Button>

            <List style={styles.root}>
              {
                reversedLoggingData.map((log, idx) => {
                  return (
                    <div key={"logData"+idx}>
                      <ListItem style={styles.root} button>
                        <div style={isMobile ? styles.logValueMobile : styles.logValue}>
                          <Typography gutterBottom variant={isMobile ? 'title' : "display2" }>
                            Value: {log.value}
                          </Typography>
                        </div>

                        <div style={isMobile ? styles.logTimeMobile : styles.logTime}>
                          <Typography gutterBottom variant={isMobile ? 'title' : "display2" }>
                            Time: {log.time}
                          </Typography>
                        </div>

                        <div style={isMobile ? styles.logDateMobile : styles.logDate}>
                          <Typography gutterBottom variant={isMobile ? 'title' : "display2" }>
                            Date: {log.date}
                          </Typography>
                        </div>
                      </ListItem>
                      <Divider />
                    </div>
                  )
                })
              }
            </List>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default TrackingApp;
