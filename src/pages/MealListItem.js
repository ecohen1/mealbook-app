import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, { ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
// import FolderIcon from '@material-ui/icons/Folder';
import BloodSugarLogIcon from '@material-ui/icons/Timeline';
import NutritionFactsIcon from '@material-ui/icons/Assignment';

import NutritionFactsModal from './NutritionFactsModal';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto"
  },
  recipeImage: {
    height: "15%",
    width: "15%",
    marginRight: "5%",
  },
  recipeTitle: {
    fontSize: "2em",
    marginBottom: "15%"
  },
  recipeInfo: {
    fontSize: "1.5em",
    color: 'gray'
  },
  recipeIcons: {
    fontSize: '2em'
  }
};

class MealListItem extends React.Component {
  state = {
    showNutritionFacts: false,
    showBloodSugar: false
  };

  redirectToRecipe = () => {
    // const { recipe } = this.props;
    // var win = window.open(recipe.url, '_blank');
    // win.focus();
  }

  toggleBloodSugar = () => {

  }

  openNutritionFacts = () => {
    this.setState({showNutritionFacts: true})
  }

  closeNutritionFacts = () => {
    this.setState({showNutritionFacts: false})
  }

  render() {
    const { recipe } = this.props;

    return (
      <ListItem style={styles.root} button onClick={this.redirectToRecipe}>
        <img src={recipe.imgUrl} style={styles.recipeImage}/>

        <div>
          <div style={styles.recipeTitle}>{recipe.name}</div>
          <div style={styles.recipeInfo}>
            {recipe.cal} cal &nbsp;&nbsp;&nbsp; {recipe.prepTime} minutes
          </div>
        </div>

        <ListItemSecondaryAction>
          <IconButton aria-label="Log Blood Sugar">
            <BloodSugarLogIcon style={styles.recipeIcons} onClick={this.toggleBloodSugar}/>
          </IconButton>
          <IconButton aria-label="See Nutrition Facts" onClick={this.openNutritionFacts}>
            <NutritionFactsIcon style={styles.recipeIcons} />
          </IconButton>
        </ListItemSecondaryAction>

        <NutritionFactsModal nutritionFactsUrl={recipe.nutritionFactsUrl} isOpen={this.state.showNutritionFacts} closeNutritionFacts={this.closeNutritionFacts}/>

      </ListItem>
    );
  }
}

export default MealListItem;
