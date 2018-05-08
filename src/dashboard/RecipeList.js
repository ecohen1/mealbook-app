import React from 'react';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import recipes from '../common/recipes'

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    marginTop: '5%'
  },
  recipeTitle: {
    marginBottom: '3%',
    width: "50%",
    margin: 'auto',
    textAlign: 'center'
  },
  exploreAll: {
    color: 'black',
    fontSize: '0.5em',
    textDecoration: 'none'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    marginBottom: '10%'
  },
  gridListTile: {
    height: "500px",
    cursor: 'pointer'
  },
  titleBar: {
    fontSize: '20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
};

class RecipeList extends React.Component {
  state = {
  };

  goToRecipeInfo = (e) => {
    let imgUrl = e.target.src;
    let recipeUrl = recipes.filter((r) => r.imgUrl == imgUrl)[0].recipeUrl;
    window.location.href = recipeUrl;
  }

  render() {

    return (
      <div style={styles.root}>
        <Typography variant="display2" color="inherit" style={styles.recipeTitle}>
          Your Recipes <a href="/recipes" style={styles.exploreAll}>explore all &gt;&gt;</a>
        </Typography>

        <br></br>
        <GridList style={styles.gridList} cols={1.5} onClick={this.goToRecipeInfo}>
          {recipes.map((recipe,idx) => (
            <GridListTile key={"tile" + idx} style={styles.gridListTile}>
              <img src={recipe.imgUrl}/>
              <GridListTileBar
                style={styles.titleBar}
                title={<Typography variant="display1" color="inherit">{recipe.title}</Typography>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default RecipeList;
