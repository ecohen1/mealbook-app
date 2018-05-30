import React from 'react';
import ListItem from '@material-ui/core/ListItem';

import {isMobile} from 'react-device-detect';

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
  recipeImageMobile: {
    height: "35%",
    width: "35%",
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
  moreInfo: {
    fontSize: "1.5em",
    color: 'gray'
  },
  recipeIcons: {
    fontSize: '2em'
  }
};

class MealListItem extends React.Component {
  state = {
    showNutritionFactsModal: false,
    showLogBloodSugarModal: false
  };

  redirectToRecipe = (id) => {
    // const { recipe } = this.props;
    // var redirectUrl = '/recipe?' + escape(recipe.title)
    // var win = window.open(redirectUrl, '_blank');
    // win.focus();
    // const { recipe } = this.props;
    // var win = window.open(recipe.recipeUrl, '_blank');
    // var win = window.open('/recipe-info?id=3145', '_blank');
    // win.focus();
    window.location.href = '/recipe-info' + window.location.search + '&id=' + id
  }

  toggleBloodSugar = () => {

  }

  openNutritionFactsModal = (e) => {
    e.stopPropagation()
    this.setState({showNutritionFactsModal: true})
  }

  closeNutritionFactsModal = (e) => {
    e.stopPropagation()
    this.setState({showNutritionFactsModal: false})
  }

  openLogBloodSugarModal = (e) => {
    e.stopPropagation()
    this.setState({showLogBloodSugarModal: true})
  }

  closeLogBloodSugarModal = (e) => {
    e.stopPropagation()
    this.setState({showLogBloodSugarModal: false})
  }

  render() {
    const { recipe } = this.props;

    return (
      <ListItem style={styles.root} button onClick={() => this.redirectToRecipe(recipe.id)}>
        <img src={recipe.imgUrl} style={isMobile ? styles.recipeImageMobile : styles.recipeImage}/>

        <div>
          <div style={styles.recipeTitle}>{recipe.title}</div>
          <div style={styles.recipeInfo}>
            {recipe.calories} cal &nbsp;&nbsp;&nbsp; {isMobile ? <br /> : ''} {recipe.prepTime} minutes
          </div>
        </div>

      </ListItem>
    );
  }
}

        // <ListItemSecondaryAction>
        //   <IconButton aria-label="Log Blood Sugar">
        //     <BloodSugarLogIcon style={styles.recipeIcons} onClick={this.openLogBloodSugarModal}/>
        //   </IconButton>
        //   <IconButton aria-label="See Nutrition Facts" onClick={this.openNutritionFactsModal}>
        //     <NutritionFactsIcon style={styles.recipeIcons} />
        //   </IconButton>
        // </ListItemSecondaryAction>
        //
        // <NutritionFactsModal nutritionFactsUrl={recipe.nutritionFactsUrl} isOpen={this.state.showNutritionFactsModal} closeModal={this.closeNutritionFactsModal}/>
        // <LogBloodSugarModal isOpen={this.state.showLogBloodSugarModal} closeModal={this.closeLogBloodSugarModal}/>
export default MealListItem;
