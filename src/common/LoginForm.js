import React from 'react';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';

import * as firebase from "firebase";

import PaperSheet from './PaperSheet'

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  paperSheet: {
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%'
  },
  formControl: {
    width: '20%',
    marginLeft: '40%'
  }
};

class LoginForm extends React.Component {
  state = {
    password: '',
    username: 'demo'
  };

  tryLogin = (userId, testPassword) => {
    var self = this
    firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        var userPassword = userData.password;
        if (testPassword === userPassword) {
          self.props.login()
        } else {
          alert('incorrect password')
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.tryLogin(this.state.username, this.state.password)
  }

  handleChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div style={styles.root}>
        <PaperSheet moreStyles={styles.paperSheet}>
          <form action="" onSubmit={this.handleSubmit}>
            <FormControl style={styles.formControl}>
              <TextField
                id="password"
                label="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                inputProps={{
                  name: 'password',
                  id: 'password',
                }}
              />
            </FormControl>
          </form>
        </PaperSheet>
      </div>
    )
  }
}

export default LoginForm;
