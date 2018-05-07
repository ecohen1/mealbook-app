import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import MealList from '../recipes/MealList';

const styles = {
  root: {
    width: "80%",
    margin: "auto",
  },
  tabBar: {
    backgroundColor: "white",
  }
};

class WelcomeTitle extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    // const { meals } = this.props;

    return (
      <div style={styles.root}>
        <Typography variant="display2" color="inherit">
          Welcome, Clare!
        </Typography>
      </div>
    );
  }
}

export default WelcomeTitle;
