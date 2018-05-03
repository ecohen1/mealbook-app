import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing.unit,
    // minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class BloodSugar extends React.Component {
  state = {
    bloodSugar: this.props.val
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        my blood sugar was
        <TextField
          id="search"
          label="blood sugar value"
          className={classes.textField}
          margin="normal"
          value={this.state.bloodSugar}
          onChange={this.handleChange}
          inputProps={{
            name: 'bloodSugar',
            id: 'bloodSugar',
          }}
        />
      </FormControl>
    );
  }
}

BloodSugar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BloodSugar);
