import React from 'react';

import PaperSheet from '../common/PaperSheet'
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

  generateId = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return s4();
  }

  addForm = () => {
    var meals = this.state.meals
    var emptyMeal = {
      type: '',
      id: this.generateId(),
      title: '',
      recipeUrl: '',
      imgUrl: '',
      calories: '',
      servings: '',
      prepTime: '',
      nutritionFactsUrl: '',
      ingredients: [],
      steps: [],
    }
    // meals.splice(0,0,emptyMeal)
    meals[emptyMeal.id] = emptyMeal
    this.setState({meals})
  }

  updateState = (meal) => {
    //preprocess meal
    // let preprocessedMeal = meal
    // let ingredients = meal.ingredients.split('\n')
    // let steps = meal.steps.split('\n')
    // preprocessedMeal.ingredients = ingredients
    // preprocessedMeal.steps = steps

    //set meal
    var meals = this.state.meals
    meals[meal.id] = meal
    this.setState({meals: {...meals}}, this.updateDB)//should updateDB first, then pull new state
  }

  updateDB = () => {
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

    return (
      <div>
        {
          Object.keys(this.state.meals).map((mealKey, idx) => {
            let meal = this.state.meals[mealKey]
            return (
              <PaperSheet key={'Paper'+idx} moreStyles={styles.paper}>
                {meal.id}
                <MealForm meal={meal} updateState={self.updateState} />
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
