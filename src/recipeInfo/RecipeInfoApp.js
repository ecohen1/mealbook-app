import React from 'react';

import track from 'react-tracking';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

import Timer from '@material-ui/icons/Timer';
import FlashOn from '@material-ui/icons/FlashOn';
import BorderOuter from '@material-ui/icons/BorderOuter';

import {isMobile} from 'react-device-detect';

import * as firebase from "firebase";


const styles = isMobile ?
{
  recipeTitle: {
    fontSize: '2em'
  },
  gridItem: {
    margin: 'auto'
  },
  ingredientsTitle: {
    fontSize: '2em'
  },
  ingredientsItems: {
    fontSize: '1em',
    width: '60%'
  },
  stepsTitle: {
    fontSize: '2em'
  },
  stepsItems: {
    fontSize: '1em',
    width: '90%'
  },
  nutritionFactsImg: {
    width: '90%'
  },
  root: {
    width: "100%",
  },
  card: {
    width: '90%',
    margin: 'auto'
  },
  img: {
    width: '60%',
    marginLeft: '20%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    float: 'right'
  },
  overviewStats: {
    textAlign: 'center'
  }
}
:
{
  recipeTitle: {},
  gridItem: {},
  ingredientsTitle: {},
  ingredientsItems: {},
  stepsTitle: {},
  stepsItems: {},
  nutritionFactsImg: {},
  root: {
    width: "100%",
  },
  card: {
    width: '60%',
    margin: 'auto'
  },
  img: {
    width: '60%',
    marginLeft: '20%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    float: 'right'
  },
  overviewStats: {
    textAlign: 'center'
  }
};

@track((props) => {return { page: 'RecipeInfoPage', username: props.search.user }}, { dispatchOnMount: true })
class RecipeInfoApp extends React.Component {
  state = {
    recipeInfo: {

    },
    recipeId: unescape(this.props.search.id),
    pinned: localStorage.getItem(unescape(this.props.search.id) + '_pinned') === "true",
    cooked: localStorage.getItem(unescape(this.props.search.id) + '_cooked') === "true"
  };

  componentDidMount() {
    this.getRecipeData()
  }

  getRecipeData = () => {
    var self = this
    return firebase.database().ref('recipes/' + this.state.recipeId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let recipe = snapshot.val();
        self.setState({recipeInfo: {...recipe}})
      }
    });
  }

  handleCookedClicked = () => {
    let recipe = this.state.recipeInfo
    this.setState({cooked: !this.state.cooked}, () => localStorage.setItem(recipe.id + '_cooked', this.state.cooked))
  }

  handlePinnedClicked = () => {
    let recipe = this.state.recipeInfo
    this.setState({pinned: !this.state.pinned}, () => localStorage.setItem(recipe.id + '_pinned', this.state.pinned))
  }

  render() {
    let recipe = this.state.recipeInfo
    return Object.keys(recipe).length === 0 ? <div></div> : (
      <div style={styles.root}>
        <Card style={styles.card}>

          <CardMedia
            style={styles.media}
            image={recipe.imgUrl}
            title="Recipe"
          />

          <CardContent>
            <Typography style={styles.recipeTitle} gutterBottom variant="display3">
              {recipe.title}
              {true ? '' :
                <Button style={styles.button} variant="fab" color="primary" aria-label="add" onClick={this.handleCookedClicked}>
                  {this.state.cooked ? <CheckBox /> : <CheckBoxOutlineBlank /> }
                </Button>
              }
            </Typography>
            <Grid container spacing={24} justify={'space-between'}>
              <Grid item xs={8} sm={4} style={styles.gridItem}>
                <Typography gutterBottom variant="headline" style={styles.overviewStats}>
                  <FlashOn />
                  <br />
                  {recipe.calories} calories
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4} style={styles.gridItem}>
                <Typography gutterBottom variant="headline" style={styles.overviewStats}>
                  <Timer />
                  <br />
                  {recipe.prepTime} min
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4} style={styles.gridItem}>
                <Typography gutterBottom variant="headline" style={styles.overviewStats}>
                  <BorderOuter />
                  <br />
                  {recipe.servings} servings
                </Typography>
              </Grid>
            </Grid>

            <Typography gutterBottom variant="headline">
            </Typography>

            <Grid container spacing={24} justify={'space-between'}>
              <Grid item xs={12} sm={12}>
                <Typography gutterBottom variant="display2" style={styles.ingredientsTitle}>
                  Ingredients
                </Typography>

                <Typography gutterBottom variant="display1" style={styles.ingredientsItems}>
                  <ul>
                    {recipe.ingredients.map((ingredient, idx) =>
                      <li key={'ingredient'+idx}>{ingredient.amount + ' ' + ingredient.item}</li>
                    )}
                    {true ? '' :
                      <Button variant="raised" color="primary">
                        <ShoppingCart style={styles.iconSmall}/>
                        Add to cart
                      </Button>
                    }
                  </ul>
                </Typography>
              </Grid>
            </Grid>
            <br /><br />

            <Typography gutterBottom variant="display2" style={styles.stepsTitle}>
              Steps
            </Typography>

            <Typography gutterBottom variant="display1" style={styles.stepsItems}>
              <ol>
                {recipe.steps.map((step, idx) =>
                  <li key={'step'+idx}>
                    {step}
                    {idx < recipe.steps.length-1 ? <Divider/> : ''}
                  </li>
                )}
              </ol>
            </Typography>
            <br /><br />
            <img src={recipe.nutritionFactsUrl} style={styles.nutritionFactsImg}/>
            <br /><br /><br /><br />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default RecipeInfoApp;
