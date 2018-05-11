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
    marginBottom: "3%",
    // marginRight: "2%",
  }
}

class App extends React.Component {
  state = {
    meals: {},
    // username: this.props.location.search.substring(1)
  };

  componentDidMount = () => {
    // this.getUserData(this.state.username)
    this.getRecipeData()
  }

  guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return s4() + s4();
  }

  addForm = () => {
    var meals = this.state.meals
    var emptyMeal = {
      type: '',
      id: this.guid(),
      title: '',
      recipeUrl: '',
      imgUrl: '',
      calories: '',
      servings: '',
      prepTime: '',
      nutritionFactsUrl: ''
    }
    // meals.splice(0,0,emptyMeal)
    meals[emptyMeal.id] = emptyMeal
    this.setState({meals})
  }

  updateState = (meal, idx) => {
    var meals = this.state.meals
    meals[meal.id] = meal
    this.setState({meals: {...meals}}, this.updateDB)//should updateDB first, then pull new state
  }

  updateDB = () => {
    console.log({
      ...this.state.meals
    })
    firebase.database().ref('recipes/').set({
      ...this.state.meals
    });
  }

  getRecipeData = () => {
    var self = this
    return firebase.database().ref('recipes/').once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let meals = snapshot.val();
        self.setState({meals: {...meals}})
      }
    });
  }

  render() {
    let self = this
    console.log(Object.keys(this.state.meals));
    return (
      <div>
        <SimpleAppBar />
        {
          Object.keys(this.state.meals).map((mealKey, idx) => {
            let meal = this.state.meals[mealKey]
            console.log(meal)
            return (
              <PaperSheet key={'Paper'+idx} moreStyles={styles.paper}>
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
