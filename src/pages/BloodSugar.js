import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

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


class BloodSugar extends React.Component {
  state = {
    age: this.props.val
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
        <InputLabel htmlFor="age-simple"></InputLabel>
        <Select
          value={this.state.age}
          onChange={this.handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={10}>under 100</MenuItem>
          <MenuItem value={20}>100 to 200</MenuItem>
          <MenuItem value={30}>more than 200</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

BloodSugar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BloodSugar);
