import React from 'react';

import track from 'react-tracking';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import {isMobile} from 'react-device-detect';

// import Checkbox from '@material-ui/core/Checkbox';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';

import * as firebase from "firebase";

const styles = {
  root: {
    width: "100%",
  },
  card: {
    width: '60%',
    margin: 'auto'
  },
  cardMobile: {
    width: '90%',
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
  },
  formField: {
    width: '100%',
    marginBottom: '2%'
  },
  quizSection: {
    marginBottom: '5%'
  }
};

@track((props) => {return { page: 'ProfilePage', username: props.search.user }}, { dispatchOnMount: true })
class ProfileApp extends React.Component {
  state = {
    username: this.props.search.user,
    formFields: {}
  };

  componentDidMount() {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        if (userData.personalizationData) {
          self.setState({formFields: userData.personalizationData})
        }
      }
    });
  }

  handleChange = (fieldName, value) => {
    var modifiedFormFields = this.state.formFields
    modifiedFormFields[fieldName] = value
    this.setState({formFields: modifiedFormFields}, this.updateDB)
  }

  updateDB = () => {
    firebase.database().ref('users/'+this.state.username).update({
      personalizationData: this.state.formFields
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <Card style={isMobile ? styles.cardMobile : styles.card}>
          <CardContent>
            <div>
              All changes are automatically saved
            </div>
            <br />
            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                About Me
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Email</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.email}
                  onChange={(event) => this.handleChange('email', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Name</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.name}
                  onChange={(event) => this.handleChange('name', event.target.value)}
                />
              </FormControl>
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Habits
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>How often do you cook?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label="howOftenDoYouCook"
                  value={this.state.formFields.howOftenDoYouCook ? this.state.formFields.howOftenDoYouCook : ''}
                  onChange={(event) => this.handleChange('howOftenDoYouCook', event.target.value)}
                >
                  <MenuItem value={"Rarely"}>Rarely</MenuItem>
                  <MenuItem value={"Most dinners"}>Most dinners</MenuItem>
                  <MenuItem value={"Most breakfasts and dinners"}>Most breakfasts and dinners</MenuItem>
                  <MenuItem value={"Most lunches and dinners"}>Most lunches and dinners</MenuItem>
                  <MenuItem value={"Most meals"}>Most meals</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Do you meal prep, or would you like to?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label="doYouMealPrep"
                  value={this.state.formFields.doYouMealPrep ? this.state.formFields.doYouMealPrep : ''}
                  onChange={(event) => this.handleChange('doYouMealPrep', event.target.value)}
                >
                  <MenuItem value={"I already meal prep"}>I already meal prep</MenuItem>
                  <MenuItem value={"I don't meal prep but I'm interested in starting"}>I don't meal prep but I'm interested in starting</MenuItem>
                  <MenuItem value={"I'm not interested in meal prepping"}>I&#39;m not interested in meal prepping</MenuItem>
                  <MenuItem value={"Meal prepping? What's that?"}>Meal prepping? What&#39;s that?</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>How many people are you feeding at each meal?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.feedingHowMany}
                  onChange={(event) => this.handleChange('feedingHowMany', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>What do you like to snack on?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.whatSnacks}
                  onChange={(event) => this.handleChange('whatSnacks', event.target.value)}
                />
              </FormControl>
              <br />
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Preferences
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Approximately, what&#39;s your budget per person for each meal?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.budgetPerPerson ? this.state.formFields.budgetPerPerson : ''}
                  onChange={(event) => this.handleChange('budgetPerPerson', event.target.value)}
                >
                  <MenuItem value={"Under $5"}>Under $5</MenuItem>
                  <MenuItem value={"$5 - $10"}>$5 - $10</MenuItem>
                  <MenuItem value={"$10 - $15"}>$10 - $15</MenuItem>
                  <MenuItem value={"More than $15 if it's special!"}>More than $15 if it&#39;s special!</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>How much time do you have to cook in the morning?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.timeToCookMorning ? this.state.formFields.timeToCookMorning : ''}
                  onChange={(event) => this.handleChange('timeToCookMorning', event.target.value)}
                >
                  <MenuItem value={"5 minutes"}>5 minutes</MenuItem>
                  <MenuItem value={"15 minutes"}>15 minutes</MenuItem>
                  <MenuItem value={"30 minutes"}>30 minutes</MenuItem>
                  <MenuItem value={"More than 30 minutes"}>More than 30 minutes</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>How about at night?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.timeToCookNight ? this.state.formFields.timeToCookNight : ''}
                  onChange={(event) => this.handleChange('timeToCookNight', event.target.value)}
                >
                  <MenuItem value={"15 minutes"}>15 minutes</MenuItem>
                  <MenuItem value={"45 minutes"}>45 minutes</MenuItem>
                  <MenuItem value={"More than an hour"}>More than an hour</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Do you like trying exotic/new foods?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.wantToTryNewFood ? this.state.formFields.wantToTryNewFood : ''}
                  onChange={(event) => this.handleChange('wantToTryNewFood', event.target.value)}
                >
                  <MenuItem value={"I'll try anything as long as it's new!"}>I'll try anything as long as it's new!</MenuItem>
                  <MenuItem value={"Maybe, if I think I'll like it"}>Maybe, if I think I&#39;ll like it</MenuItem>
                  <MenuItem value={"I'd rather not experiment much"}>I&#39;d rather not experiment much</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Do you have any allergies?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.allergies}
                  onChange={(event) => this.handleChange('allergies', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Are there any cuisines you especially enjoy?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  multiple
                  label=""
                  value={this.state.formFields.favoriteCuisines ? this.state.formFields.favoriteCuisines : []}
                  onChange={(event) => this.handleChange('favoriteCuisines', event.target.value)}
                >
                  <MenuItem value={"Italian"}>Italian</MenuItem>
                  <MenuItem value={"French"}>French</MenuItem>
                  <MenuItem value={"American"}>American</MenuItem>
                  <MenuItem value={"Mexican"}>Mexican</MenuItem>
                  <MenuItem value={"Indian"}>Indian</MenuItem>
                  <MenuItem value={"Asian"}>Asian</MenuItem>
                  <MenuItem value={"Mediterranean"}>Mediterranean</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Diabetes History
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Are you diabetic?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.isDiabetic ? this.state.formFields.isDiabetic : ''}
                  onChange={(event) => this.handleChange('isDiabetic', event.target.value)}
                >
                  <MenuItem value={"Yes, Type 1"}>Yes, Type 1</MenuItem>
                  <MenuItem value={"Yes, Type 2"}>Yes, Type 2</MenuItem>
                  <MenuItem value={"No, I'm prediabetic"}>No, I&#39;m prediabetic</MenuItem>
                  <MenuItem value={"I'm not diabetic or prediabetic"}>I&#39;m not diabetic or prediabetic</MenuItem>
                </Select>
              </FormControl>
              <br /><Typography gutterBottom variant="headline">
                <strong>How often do you inject insulin?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.howOftenInsulin ? this.state.formFields.howOftenInsulin : ''}
                  onChange={(event) => this.handleChange('howOftenInsulin', event.target.value)}
                >
                  <MenuItem value={"I don't use insulin"}>I don&#39;t use insulin</MenuItem>
                  <MenuItem value={"Only when my blood sugar is higher than normal"}>Only when my blood sugar is higher than normal</MenuItem>
                  <MenuItem value={"After every meal"}>After every meal</MenuItem>
                  <MenuItem value={"I use an insulin pump"}>I use an insulin pump</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>What&#39;s your fasting blood sugar? You can provide it in either mg/dL or mmol/L?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.fastingBloodSugar}
                  onChange={(event) => this.handleChange('fastingBloodSugar', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>What&#39;s your A1C</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.A1C}
                  onChange={(event) => this.handleChange('A1C', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Do you take any other medications we should know about?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.otherMedications}
                  onChange={(event) => this.handleChange('otherMedications', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Are there any foods that spike your glucose especially high (for the same amount of carbs)?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.foodsThatSpikeGlucose}
                  onChange={(event) => this.handleChange('foodsThatSpikeGlucose', event.target.value)}
                />
              </FormControl>
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Physical Activity
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>How active are you?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.howActive ? this.state.formFields.howActive : ''}
                  onChange={(event) => this.handleChange('howActive', event.target.value)}
                >
                  <MenuItem value={"Just some walking"}>Just some walking</MenuItem>
                  <MenuItem value={"A lot of walking"}>A lot of walking</MenuItem>
                  <MenuItem value={"Regular exercise"}>Regular exercise</MenuItem>
                  <MenuItem value={"A lot of walking, and regular exercise"}>A lot of walking, and regular exercise</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>How well do you sleep, on a scale from 1 to 5?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.howWellDoYouSleep ? this.state.formFields.howWellDoYouSleep : ''}
                  onChange={(event) => this.handleChange('howWellDoYouSleep', event.target.value)}
                >
                  <MenuItem value={"1 (I wake up often and/or I don't sleep very much)"}>1 (I wake up often and/or I don&#39;t sleep very much)</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5 (I sleep great!)"}>5 (I sleep great!)</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>How much energy do you have throughout the day, on a scale from 1 to 5?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.howMuchEnergy ? this.state.formFields.howMuchEnergy : ''}
                  onChange={(event) => this.handleChange('howMuchEnergy', event.target.value)}
                >
                  <MenuItem value={"1 (Very tired)"}>1 (Very tired)</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5 (Very energized)"}>5 (Very energized)</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Your Goals
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>Check the goals that are MOST important to you.</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  multiple
                  label=""
                  value={this.state.formFields.goals ? this.state.formFields.goals : []}
                  onChange={(event) => this.handleChange('goals', event.target.value)}
                >
                  <MenuItem value={"Eat healthier"}>Eat healthier</MenuItem>
                  <MenuItem value={"Lose weight"}>Lose weight</MenuItem>
                  <MenuItem value={"Try cooking new things"}>Try cooking new things</MenuItem>
                  <MenuItem value={"Reduce A1C level"}>Reduce A1C level</MenuItem>
                  <MenuItem value={"Reduce blood sugar during specific times of the day"}>Reduce blood sugar during specific times of the day</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={styles.quizSection}>
              <Typography gutterBottom variant="display2">
                Demographic
              </Typography>
              <Typography gutterBottom variant="headline">
                <strong>How old are you?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.howOldAreYou}
                  onChange={(event) => this.handleChange('howOldAreYou', event.target.value)}
                />
              </FormControl>
              <Typography gutterBottom variant="headline">
                <strong>How tall are you?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.howTallAreYou}
                  onChange={(event) => this.handleChange('howTallAreYou', event.target.value)}
                />
              </FormControl>
              <Typography gutterBottom variant="headline">
                <strong>How much do you weigh?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.weight}
                  onChange={(event) => this.handleChange('weight', event.target.value)}
                />
              </FormControl>
              <Typography gutterBottom variant="headline">
                <strong>Race</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <Select
                  label=""
                  value={this.state.formFields.race ? this.state.formFields.race : ''}
                  onChange={(event) => this.handleChange('race', event.target.value)}
                >
                  <MenuItem value={"Black or African American"}>Black or African American</MenuItem>
                  <MenuItem value={"White"}>White</MenuItem>
                  <MenuItem value={"American Indian or Alaskan Native"}>American Indian or Alaskan Native</MenuItem>
                  <MenuItem value={"Asian"}>Asian</MenuItem>
                  <MenuItem value={"Native Hawaiian or Other Pacific Islander"}>Native Hawaiian or Other Pacific Islander</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>Where do you usually buy your groceries?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.whereBuyGroceries}
                  onChange={(event) => this.handleChange('whereBuyGroceries', event.target.value)}
                />
              </FormControl>
              <br />
              <Typography gutterBottom variant="headline">
                <strong>What&#39;s your zip code, if you were to have groceries delivered to you?</strong>
              </Typography>
              <FormControl style={styles.formField}>
                <TextField
                  label=""
                  value={this.state.formFields.zipCode}
                  onChange={(event) => this.handleChange('zipCode', event.target.value)}
                />
              </FormControl>
            </div>
            <div>
              All changes are automatically saved
            </div>
          </CardContent>
        </Card>
        <br />
      </div>
    );
  }
}

export default ProfileApp;
