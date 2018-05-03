import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import MealListItem from './MealListItem';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
};

class MealList extends React.Component {
  state = {
  };

  render() {
    const { classes, recipes } = this.props;

    return (
      <List>
        {
          recipes.map((recipe, idx) => {
            return (
              <div key={"mealListItem"+idx}>
                <MealListItem recipe={recipe} />
                {idx < recipes.length - 1 ? <Divider /> : ''}
              </div>
            )
          })
        }
      </List>
    );
  }
}

export default MealList;
