import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import MealList from './MealList';

const styles = {
  root: {
    width: "100%",
    margin: "auto",
  },
  tabBar: {
    backgroundColor: "white",
  }
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

    var mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"]

    var mealsByType = {
      "Breakfast": meals.filter((meal) => meal.type === "Breakfast"),
      "Lunch": meals.filter((meal) => meal.type === "Lunch"),
      "Dinner": meals.filter((meal) => meal.type === "Dinner"),
      "Snack": meals.filter((meal) => meal.type === "Snack"),
    }

    return (
      <div style={styles.root}>
        <AppBar position="static" color="default" style={styles.tabBar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            {
              mealTypes.map((mealType, idx) => {
                return (
                  <Tab key={"mealTab"+idx} label={mealType} />
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
            mealTypes.map((mealType, idx) => {
              return (
                <MealList
                  key={"mealList"+idx}
                  recipes={mealsByType[mealType]}
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
