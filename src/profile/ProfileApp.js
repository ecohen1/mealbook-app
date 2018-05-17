import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Avatar from 'material-ui/Avatar';

import * as firebase from "firebase";

const styles = {
  root: {
    width: "100%",
  },
  card: {
    width: '60%',
    margin: 'auto'
  },
  accountIcon: {
    height: '200px',
    width: '200px',
    margin: 'auto',
  },
  accountName: {
    width: '50%',
    margin: 'auto',
    textAlign: 'center'
  }
};

class ProfileApp extends React.Component {
  state = {
    username: this.props.search.user,
    preferences: {},
    metrics: {},
    goals: {},
    hasProfileData: false
  };

  componentDidMount() {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        //get meals for user
        let { preferences, metrics, goals } = userData.personalizationData;
        self.setState({preferences, metrics, goals, hasProfileData: true})
      }
    });
  }


  render() {
    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          {!this.state.hasProfileData ? <div/> :
            <CardContent>
              <div style={styles.accountName}>
                <Avatar
                  src="profile-pic.jpg"
                  style={styles.accountIcon}
                />
                <Typography gutterBottom variant="display3">
                  Eli Cohen
                </Typography>
              </div>

              <Typography gutterBottom variant="display2">
                Preferences
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Meals:  </strong>{this.state.preferences.meals}<br/>
                <strong>Meal Prep:  </strong>{this.state.preferences.mealPrep}<br/>
                <strong>Servings Per Meal:  </strong>{this.state.preferences.servings}<br/>
                <strong>Favorite Snacks:  </strong>{this.state.preferences.snacks}<br/>
                <strong>Budget:  </strong>{this.state.preferences.budget}<br/>
                <strong>Time to Cook:  </strong>{this.state.preferences.prepTime}<br/>
                <strong>Frequency of new foods:  </strong>{this.state.preferences.newFoodFrequency}<br/>
                <strong>Allergies:  </strong>{this.state.preferences.allergies}<br/>
                <strong>Cuisines:  </strong>{this.state.preferences.cuisines}<br/>
              </Typography>
              <br />

              <Divider />

              <br /><br />
              <Typography gutterBottom variant="display2">
                Metrics
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Age:  </strong>{this.state.metrics.age}<br/>
                <strong>Height:  </strong>{this.state.metrics.height.feet} foot {this.state.metrics.height.inches} inches<br/>
                <strong>Weight:  </strong>{this.state.metrics.weight}<br/>
                <strong>A1C:  </strong>{this.state.metrics.A1C}<br/>
                <strong>Fasting Blood Sugar:  </strong>{this.state.metrics.fastingBloodSugar}<br/>
                <strong>Race:  </strong>{this.state.metrics.race}<br/>
              </Typography>
              <br />

              <Divider />

              <br /><br />
              <Typography gutterBottom variant="display2">
                Goals
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Weight:  </strong>{this.state.goals.weight}<br/>
                <strong>A1C:  </strong>{this.state.goals.A1C}<br/>
                <strong>Fasting Blood Sugar:  </strong>{this.state.goals.fastingBloodSugar}<br/>
              </Typography>

            </CardContent>
          }
        </Card>
      </div>
    );
  }
}

export default ProfileApp;
