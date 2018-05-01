import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import PaperSheet from './PaperSheet'
import SimpleAppBar from './SimpleAppBar'
import GlucoseForm from './GlucoseForm'
import AddButton from './AddButton'

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

class App extends React.Component {
  state = {
    forms: [
    ],
    username: this.props.location.search.substring(1)
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
    console.log(this.props.location.search.substring(1));
  }

  addForm = () => {
    var forms = this.state.forms
    var emptyForm = {
      bloodSugar: '',
      dishName: '',
      timeAfter: ''
    }
    forms.push(emptyForm)
    this.setState({forms: forms})
  }

  updateState = (form, idx) => {
    var forms = this.state.forms
    forms[idx] = form
    this.setState({forms: forms}, this.updateDB)
  }

  writeUserData = (userId, forms) => {
    firebase.database().ref('users/' + userId).set({
      forms: forms
    });
  }

  getUserData = (userId) => {
    var self = this
    return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      var forms = snapshot.val() ? snapshot.val().forms : [];
      self.setState({forms: forms})
    });
  }

  updateDB = () => {
    this.writeUserData(this.state.username, this.state.forms)
  }

  render() {
    var self = this
    return (
      <div>
        <SimpleAppBar />
          {
            this.state.forms.map(function(form, idx) {
              return (
                <PaperSheet key={'Paper'+idx} >
                  <GlucoseForm form={form} idx={idx} updateState={self.updateState}/>
                </PaperSheet>
              );
            })
          }
          <br></br>
          <br></br>
          {this.state.forms.length > 0 ?
            'all changes are automatically saved, feel free to leave the page and your logs will be available next time you come back!' : ''
          }
          <br></br>
          <br></br>
          <AddButton onClick={this.addForm}/>
      </div>
    )
  }
}

export default App;
