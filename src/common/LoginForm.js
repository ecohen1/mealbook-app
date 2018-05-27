import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as firebase from "firebase";

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  formControl: {
    width: '20%',
    marginLeft: '40%',
    marginTop: '20%'
  }
};

class LoginForm extends React.Component {
  state = {
    password: '',
  };

  tryLogin = (testPassword) => {
    let userId = this.props.user
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
    this.tryLogin(this.state.password)
  }

  handleChange = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div style={styles.root}>
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Log In
        </Button>
      </div>
    )
  }
}

export default LoginForm;
