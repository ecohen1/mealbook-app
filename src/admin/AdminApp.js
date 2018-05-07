import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

import PaperSheet from '../common/PaperSheet'
import SimpleAppBar from '../common/SimpleAppBar'
import MealForm from './MealForm'
import AddButton from './AddButton'

import * as firebase from "firebase";

const styles = {
  paper: {
    // marginLeft: "2%",
    // marginRight: "2%",
  }
}

class App extends React.Component {
  state = {
    meals: [
    ],
    username: this.props.location.search.substring(1)
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  addForm = () => {
    var meals = this.state.meals
    var emptyForm = {
      type: '',
      name: '',
      url: '',
      imgUrl: '',
      cal: '',
      prepTime: '',
      nutritionFactsUrl: ''
    }
    // meals.splice(0,0,emptyForm)
    meals.push(emptyForm)
    this.setState({meals})
  }

  updateState = (meal, idx) => {
    var meals = this.state.meals
    meals[idx] = meal
    this.setState({meals}, this.updateDB)
  }

  updateDB = () => {
    firebase.database().ref('users/' + this.state.username).set({
      meals: this.state.meals,
      hasPersonalized: true
    });
  }

  getUserData = (userId) => {
    var self = this
    return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        //get meals for user
        var meals = userData.meals;
        //set new state
        self.setState({meals})
      }
    });
  }

  render() {
    let self = this
    var allMeals = []

    return (
      <div>
        <SimpleAppBar />
        {
          this.state.meals.map((meal, idx) => {
            return (
              <PaperSheet key={'Paper'+idx}>
                <MealForm meal={meal} idx={idx} updateState={self.updateState} />
              </PaperSheet>
            );
          })
        }
        <br></br>
        <br></br>
        {this.state.meals.length > 0 ?
          'all changes are automatically saved' : ''
        }
        <br></br>
        <br></br>
        <AddButton onClick={this.addForm}/>
      </div>
    )
  }
}

export default App;
