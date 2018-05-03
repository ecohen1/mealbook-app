import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import MealList from './MealList';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
};

class FullWidthTabs extends React.Component {
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
    const { meals } = this.props;
    const mealNames = ["Breakfast", "Lunch", "Dinner", "Snacks"]

    return (
      <div className={styles.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            {
              meals.map((meal, idx) => {
                return (
                  <Tab key={"mealTab"+idx} label={mealNames[idx]} />
                )
              })
            }
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis='x'
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {
            meals.map((mealRecipes, idx) => {
              return (
                <MealList
                  key={"mealList"+idx}
                  recipes={mealRecipes}
                />
              )
            })
          }
        </SwipeableViews>
      </div>
    );
  }
}

export default FullWidthTabs;
