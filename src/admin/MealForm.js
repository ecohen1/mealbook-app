import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import * as firebase from "firebase";

import { TypeField,
  NameField,
  UrlField,
  ImgUrlField,
  CalField,
  PrepTimeField,
  NutritionFactsUrlField,
  IngredientsField,
  StepsField } from './MealFormFields'

const styles = {
  root: {
    marginLeft: "2%",
    marginRight: "2%"
  }
}

class MealForm extends React.Component {
  state = {...this.props.meal};

  updateField = (fieldName, val) => {
    var stateChange = {}

    if (fieldName == "ingredients") {
      let ingredientList = val.split('\n')
      var ingredientDictList = []
      for (var ingredientKey in Object.keys(ingredientList)) {
        ingredientDictList.push({amount: '', item: ingredientList[ingredientKey]})
      }
      stateChange.ingredients = ingredientDictList
    } else if (fieldName == "steps") {
      let stepList = val.split('\n')
      stateChange.steps = stepList
    } else {
      stateChange[fieldName] = val
    }

    this.setState(stateChange, this.updateState)
    // this.updateState(stateChange)
  }

  updateState = () => {
    this.props.updateState(this.state)
  }

  // guid = () => {
  //   function s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   }
  //   // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  //   return s4();
  // }

  // handleFileUpload = (e) => {
  //   e.preventDefault();
  //
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //
  //   reader.onloadend = () => {
  //     let filename = 'nutrition facts for ' + this.state.name + '-' + this.guid() + '.jpg';
  //     this.uploadImageToFirebase(file, filename)
  //   }
  //
  //   reader.readAsDataURL(file)
  // }
  //
  // uploadImageToFirebase = (file, filename) => {
  //   var self = this;
  //   var storageRef = firebase.storage().ref();
  //   var ref = storageRef.child(filename);
  //
  //   ref.put(file).then(function(snapshot) {
  //     self.setState({nutritionFactsUrl: snapshot.downloadURL})
  //   });
  // }

  saveForm = () => {
    
  }

  render() {
    let ingredientsList = []
    if (this.props.meal.ingredients) {
      for (var ingredientKey in Object.keys(this.props.meal.ingredients)) {
        ingredientsList.push(this.props.meal.ingredients[ingredientKey].item)
      }
    }
    let ingredients = ingredientsList.join('\n')

    let steps = this.props.meal.steps.join('\n')

    return (
      <form style={styles.root} action="" autoComplete="off" onSubmit={this.saveForm}>
        <TypeField val={this.props.meal.type} updateParent={(val) => this.updateField('type', val)}/>
        <NameField val={this.props.meal.title} updateParent={(val) => this.updateField('title', val)}/>
        <UrlField val={this.props.meal.recipeUrl} updateParent={(val) => this.updateField('recipeUrl', val)}/>
        <ImgUrlField val={this.props.meal.imgUrl} updateParent={(val) => this.updateField('imgUrl', val)}/>
        <CalField val={this.props.meal.calories} updateParent={(val) => this.updateField('calories', val)}/>
        <PrepTimeField val={this.props.meal.prepTime} updateParent={(val) => this.updateField('prepTime', val)}/>
        <NutritionFactsUrlField val={this.props.meal.nutritionFactsUrl} updateParent={(val) => this.updateField('nutritionFactsUrl', val)}/>
        <IngredientsField val={ingredients} updateParent={(val) => this.updateField('ingredients', val)}/>
        <StepsField val={steps} updateParent={(val) => this.updateField('steps', val)}/>
      </form>
    );
  }
}

export default MealForm;
