import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { TypeField,
  NameField,
  UrlField,
  ImgUrlField,
  CalField,
  PrepTimeField } from './MealFormFields'

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

  render() {
    // const { classes } = this.props;

    return (
      <form style={styles.root} action="" autoComplete="off" onSubmit={this.saveForm}>
        <TypeField val={this.state.type} updateParent={(val) => this.updateField('type', val)}/>
        <NameField val={this.state.name} updateParent={(val) => this.updateField('name', val)}/>
        <UrlField val={this.state.url} updateParent={(val) => this.updateField('url', val)}/>
        <ImgUrlField val={this.state.imgUrl} updateParent={(val) => this.updateField('imgUrl', val)}/>
        <CalField val={this.state.cal} updateParent={(val) => this.updateField('cal', val)}/>
        <PrepTimeField val={this.state.prepTime} updateParent={(val) => this.updateField('prepTime', val)}/>
      </form>
    );
  }
}

export default MealForm;
