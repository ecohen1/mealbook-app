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
  NutritionFactsUrlField } from './MealFormFields'

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
}

class MealForm extends React.Component {
  state = {...this.props.meal};

  updateField = (fieldName, val) => {
    var stateChange = {}
    stateChange[fieldName] = val
    this.setState(stateChange, this.updateState)
  }

  updateState = () => {
    this.props.updateState(this.state, this.props.idx)
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

  render() {
    return (
      <form style={styles.root} action="" autoComplete="off" onSubmit={this.saveForm}>
        <TypeField val={this.state.type} updateParent={(val) => this.updateField('type', val)}/>
        <NameField val={this.state.name} updateParent={(val) => this.updateField('name', val)}/>
        <UrlField val={this.state.url} updateParent={(val) => this.updateField('url', val)}/>
        <ImgUrlField val={this.state.imgUrl} updateParent={(val) => this.updateField('imgUrl', val)}/>
        <CalField val={this.state.cal} updateParent={(val) => this.updateField('cal', val)}/>
        <PrepTimeField val={this.state.prepTime} updateParent={(val) => this.updateField('prepTime', val)}/>
        <NutritionFactsUrlField val={this.state.nutritionFactsUrl} updateParent={(val) => this.updateField('nutritionFactsUrl', val)}/>
      </form>
    );
  }
}

export default MealForm;
