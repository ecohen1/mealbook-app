import React from 'react';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import recipes from '../common/recipes'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '5%'
  },
  recipeTitle: {
    marginBottom: '3%'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  gridListTile: {
    height: "500px"
  },
  title: {
    color: "black",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
};

class RecipeList extends React.Component {
  state = {
  };

  render() {

    return (
      <div style={styles.root}>
        <Typography variant="display2" color="inherit" style={styles.recipeTitle}>
          Your Recipes
        </Typography>

        <GridList style={styles.gridList} cols={1.5}>
          {recipes.map((recipe,idx) => (
            <GridListTile key={"tile" + idx} style={styles.gridListTile}>
              <img src={recipe.imgUrl} />
              <GridListTileBar
                style={styles.titleBar}
                title={recipe.title}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default RecipeList;
