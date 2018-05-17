import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

import * as firebase from "firebase";

const styles = {
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
  }
};

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
            <Typography gutterBottom variant="display3">
              {recipe.title}
              <Button style={styles.button} variant="fab" color="primary" aria-label="add" onClick={this.handleCookedClicked}>
                {this.state.cooked ? <CheckBox /> : <CheckBoxOutlineBlank /> }
              </Button>
            </Typography>
            <Grid container spacing={24} justify={'space-between'}>
              <Grid item xs={8} sm={4}>
                <Typography gutterBottom variant="headline">
                  {recipe.calories} calories
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Typography gutterBottom variant="headline">
                  {recipe.prepTime} min
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Typography gutterBottom variant="headline">
                  {recipe.servings} servings
                </Typography>
              </Grid>
            </Grid>

            <Typography gutterBottom variant="headline">
            </Typography>

            <Grid container spacing={24} justify={'space-between'}>
              <Grid item xs={24} sm={12}>
                <Typography gutterBottom variant="display2">
                  Ingredients
                </Typography>

                <Typography gutterBottom variant="display1">
                  <ul>
                    {recipe.ingredients.map((ingredient, idx) =>
                      <li key={'ingredient'+idx}>{ingredient.amount + ' ' + ingredient.item}</li>
                    )}
                    <Button variant="raised" color="primary">
                    <ShoppingCart style={styles.iconSmall}/>
                    Add to cart
                    </Button>
                  </ul>
                </Typography>
              </Grid>
            </Grid>

            <Typography gutterBottom variant="display2">
              Steps
            </Typography>

            <Typography gutterBottom variant="display1">
              <ol>
                {recipe.steps.map((step, idx) =>
                  <li key={'step'+idx}>{step}</li>
                )}
              </ol>
            </Typography>

            <img src={recipe.nutritionFactsUrl} />
            <br /><br /><br /><br />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default RecipeInfoApp;
