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
import SubmitButton from './SubmitButton'

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
  state = {...this.props.form};

  // componentDidMount = () => {
  //   this.setState(this.props.form, () => console.log(this.state))
  // }

  updateTimeAfter = (val) => {
    this.setState({timeAfter: val}, this.updateState)
  }

  updateDishName = (val) => {
    this.setState({dishName: val}, this.updateState)
  }

  updateBloodSugar = (val) => {
    this.setState({bloodSugar: val}, this.updateState)
  }

  updateState = () => {
    this.props.updateState(this.state, this.props.idx)
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} action="" autoComplete="off" onSubmit={this.saveForm}>
        <TimeAfter val={this.state.timeAfter} updateParent={this.updateTimeAfter}/>
        <br></br>
        <br></br>
        <DishName val={this.state.dishName} updateParent={this.updateDishName}/>
        <br></br>
        <br></br>
        <BloodSugar val={this.state.bloodSugar} updateParent={this.updateBloodSugar}/>
      </form>
    );
  }
}

GlucoseForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlucoseForm);
