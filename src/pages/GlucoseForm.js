import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import TimeAfter from './TimeAfter'
import DishName from './Autocomplete'
import BloodSugar from './BloodSugar'

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
});


class GlucoseForm extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <TimeAfter />
        <br></br>
        <DishName />
        <br></br>
        <BloodSugar />
      </form>
    );
  }
}

GlucoseForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlucoseForm);
