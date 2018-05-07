import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

import * as firebase from "firebase";

const styles = {
};

class LogBloodSugarModal extends React.Component {

  state = {
    timeAfter: '',
    bloodSugarLevel: '',
    // username: this.props.location.search.substring(1)
    username: 'test'
  };

  handleChangeTimeAfter = event => {
    this.setState({ timeAfter: event.target.value });
    this.uploadBloodSugarLevel()
  };

  handleChangeBloodSugarLevel = event => {
    this.setState({ bloodSugarLevel: event.target.value });
    this.uploadBloodSugarLevel()
  };

  uploadBloodSugarLevel = () => {
    const { timeAfter, bloodSugarLevel, username} = this.state
    firebase.database().ref('users/' + username + '/meals/0').set({
      timeAfter: timeAfter,
      bloodSugarLevel: bloodSugarLevel
    });
  }

  render() {
    return (
      <Dialog aria-labelledby="simple-dialog-title" open={this.props.isOpen} onBackdropClick={this.props.closeModal} onClick={e=>e.stopPropagation()}>
        <FormControl style={styles.formField}>
          <TextField
            id="timeAfter"
            label="time after eating"
            value={this.state.timeAfter}
            onChange={this.handleChangeTimeAfter}
            inputProps={{
              name: 'timeAfter',
              id: 'timeAfter',
            }}
          />
        </FormControl>
        <br></br>
        <FormControl style={styles.formField}>
          <TextField
            id="bloodSugarLevel"
            label="blood sugar level"
            value={this.state.bloodSugarLevel}
            onChange={this.handleChangeBloodSugarLevel}
            inputProps={{
              name: 'bloodSugarLevel',
              id: 'bloodSugarLevel',
            }}
          />
        </FormControl>
      </Dialog>
    );
  }
}

export default LogBloodSugarModal;
