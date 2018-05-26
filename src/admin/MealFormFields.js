import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formField: {
    width: "100%",
    marginTop: "1%",
    marginBottom: "1%",
  }
}

export class TypeField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <Select
          id="type"
          label="meal type"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'type',
            id: 'type',
          }}
        >
          <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"Lunch"}>Lunch</MenuItem>
          <MenuItem value={"Dinner"}>Dinner</MenuItem>
          <MenuItem value={"Snack"}>Snack</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export class NameField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="name"
          label="recipe name"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'name',
            id: 'name',
          }}
        />
      </FormControl>
    );
  }
}

export class UrlField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="url"
          label="recipe url"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'url',
            id: 'url',
          }}
        />
      </FormControl>
    );
  }
}

export class ImgUrlField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="imgUrl"
          label="image url"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'imgUrl',
            id: 'imgUrl',
          }}
        />
      </FormControl>
    );
  }
}

export class CalField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="cal"
          label="calories"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'cal',
            id: 'cal',
          }}
        />
      </FormControl>
    );
  }
}

export class ServingsField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="servings"
          label="servings"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'servings',
            id: 'servings',
          }}
        />
      </FormControl>
    );
  }
}

export class PrepTimeField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="prepTime"
          label="prep time"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'prepTime',
            id: 'prepTime',
          }}
        />
      </FormControl>
    );
  }
}

export class NutritionFactsUrlField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          id="nutritionFactsUrl"
          label="nutrition facts image url"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'nutritionFactsUrl',
            id: 'nutritionFactsUrl',
          }}
        />
      </FormControl>
    );
  }
}

export class IngredientsField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          multiline
          id="ingredients"
          label="ingredients"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'ingredients',
            id: 'ingredients',
          }}
        />
      </FormControl>
    );
  }
}

export class StepsField extends React.Component {
  state = {
    val: this.props.val
  };

  handleChange = event => {
    this.setState({ val: event.target.value });
    this.props.updateParent(event.target.value)
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormControl style={styles.formField}>
        <TextField
          multiline
          id="steps"
          label="steps"
          value={this.state.val}
          onChange={this.handleChange}
          inputProps={{
            name: 'steps',
            id: 'steps',
          }}
        />
      </FormControl>
    );
  }
}
