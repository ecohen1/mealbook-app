import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {isMobile} from 'react-device-detect';

import * as firebase from "firebase";

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  form: {
    marginTop: '10%'
  },
  formMobile: {
    marginTop: '40%'
  },
  formControl: {
    display: 'inline'
  },
  buttonMobile: {
    width: '20%',
    // marginLeft: '40%',
    // marginTop: '10%'
  },
  passwordField: {
    width: '40%',
    marginLeft: '30%',
  },
  passwordFieldMobile: {
    width: '60%',
    marginLeft: '10%',
  },
  loginMsg: {
    width: '90%',
    marginLeft: '5%',
    textAlign: 'center',
    marginBottom: '10%'
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
        <form action="" onSubmit={this.handleSubmit} style={isMobile ? styles.formMobile : styles.form}>
          <Typography variant="title" color="inherit" style={styles.loginMsg}>
            Type your password below and {isMobile ? "tap \"log in\"" : "click \"log in\" or hit \"enter\""}
          </Typography>

          <FormControl style={styles.formControl}>
            <TextField
              style={isMobile ? styles.passwordFieldMobile : styles.passwordField}
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
          <Button variant="raised" color="primary" onClick={this.handleSubmit} style={isMobile ? styles.buttonMobile : {}}>
          Log In
          </Button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
