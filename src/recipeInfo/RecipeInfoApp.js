import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Icon from 'material-ui/Icon';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import TurnedIn from '@material-ui/icons/TurnedIn';
import TurnedInNot from '@material-ui/icons/TurnedInNot';

import * as firebase from "firebase";

import PaperSheet from '../common/PaperSheet'
import SimpleAppBar from '../common/SimpleAppBar'
import recipes from '../common/recipes'

const recipe = recipes[0]

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
    meals: [
    ],
    hasPersonalized: true,
    recipeName: unescape(this.props.location.search.substring(1)),
    pinned: false,
    cooked: false,
  };

  render() {
    return (
      <div style={styles.root}>
        <SimpleAppBar />
        <Card style={styles.card}>

          <CardMedia
            style={styles.media}
            image={recipe.imgUrl}
            title="Recipe"
          />

          <CardContent>
            <Typography gutterBottom variant="display3">
              {recipe.title}
              <Button style={styles.button} variant="fab" color="primary" aria-label="add" onClick={() => this.setState({cooked: !this.state.cooked})}>
                {this.state.cooked ? <CheckBox /> : <CheckBoxOutlineBlank /> }
              </Button>
              <Button style={styles.button} variant="fab" color="secondary" aria-label="edit" onClick={() => this.setState({pinned: !this.state.pinned})}>
                {this.state.pinned ? <TurnedIn /> : <TurnedInNot /> }
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
              Recommended for you because: <strong>Seafood, Some Carbs, Dairy-free, Meal Prep</strong>
            </Typography>

            <Grid container spacing={24} justify={3}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <img src={recipe.nutritionFactsUrl} />
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
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default RecipeInfoApp;
