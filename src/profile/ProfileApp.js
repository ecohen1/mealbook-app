import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';

import * as firebase from "firebase";

import PaperSheet from '../common/PaperSheet'
import SimpleAppBar from '../common/SimpleAppBar'
import recipes from '../common/recipes'

const recipe = recipes[0]

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
    meals: [
    ],
    hasPersonalized: true,
    recipeName: unescape(this.props.location.search.substring(1)),
  };

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar />
        <Card style={styles.card}>

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
              <strong>Meals:  </strong>Breakfast, Dinner<br/>
              <strong>Meal Prep:  </strong>Not interested<br/>
              <strong>Servings Per Meal:  </strong>2<br/>
              <strong>Favorite Snacks:  </strong>Nuts, Trail Mix, Apples, Chips, Cookies<br/>
              <strong>Budget:  </strong>$5-$10 per serving<br/>
              <strong>Time to Cook:  </strong>45 minutes<br/>
              <strong>Frequency of new foods:  </strong>High<br/>
              <strong>Allergies:  </strong>None<br/>
              <strong>Cuisines:  </strong>Italian, Mexican, Asian<br/>
            </Typography>
            <br />

            <Divider />

            <br /><br />
            <Typography gutterBottom variant="display2">
              Numbers
            </Typography>
            <Typography gutterBottom variant="headline">
              <strong>Age:  </strong>21<br/>
              <strong>Height:  </strong>6 foot 3<br/>
              <strong>Weight:  </strong>175<br/>
              <strong>A1C:  </strong>6.4<br/>
              <strong>Fasting Blood Sugar:  </strong>100 mg/dL<br/>
              <strong>Race:  </strong>Caucasian<br/>
            </Typography>

          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ProfileApp;
