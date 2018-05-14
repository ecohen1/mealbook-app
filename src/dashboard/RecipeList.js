import React from 'react';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import recipes from '../common/recipes'
import PaperSheet from '../common/PaperSheet'

const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    marginTop: '2%'
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
  },
  paperSheet: {
    background: 'rgba(0,0,0,0)'
  },
  gridListTile: {
    height: "500px",
    cursor: 'pointer',
    marginLeft: "10px",
    marginRight: "10px",
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: '0px !important'
  },
  titleBar: {
    fontSize: '20px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
};

class RecipeList extends React.Component {
  state = {
  };

  goToRecipeInfo = (id) => {
    // let imgUrl = e.target.src;
    // let recipeUrl = recipes.filter((r) => r.imgUrl == imgUrl)[0].recipeUrl;
    // window.location.href = recipeUrl;
    // var win = window.open(recipeUrl, '_blank');
    // win.focus();
    window.location.href = '/recipe-info?id=' + id
  }

  render() {
    let { recipes } = this.props

    return (
      <div style={styles.root}>
        <Typography variant="display2" color="inherit" style={styles.recipeTitle}>
          Your Recipes <a href="/recipes" style={styles.exploreAll}>explore all &gt;&gt;</a>
        </Typography>

        <br></br>
        <PaperSheet moreStyles={styles.paperSheet} noElevation>
          <GridList style={styles.gridList} cols={1.5}>
            {recipes.filter(recipe => localStorage.getItem(recipe.id+'_pinned') == "true").map((recipe,idx) => (
              <GridListTile key={"tile" + idx} style={styles.gridListTile} onClick={() => this.goToRecipeInfo(recipe.id)}>
                <img src={recipe.imgUrl}/>
                <GridListTileBar
                  style={styles.titleBar}
                  title={<Typography variant="display1" color="inherit">{recipe.title}</Typography>}
                />
              </GridListTile>
            ))}
          </GridList>
        </PaperSheet>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    )
  }
}

export default RecipeList;
