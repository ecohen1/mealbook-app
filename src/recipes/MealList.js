import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import MealListItem from './MealListItem';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto"
  },
};

class MealList extends React.Component {
  state = {
  };

  render() {
    const { recipes } = this.props;

    return (
      <List style={styles.root}>
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
