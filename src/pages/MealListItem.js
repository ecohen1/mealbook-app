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
import DeleteIcon from '@material-ui/icons/Delete';

let imgUrl = "https://www.inspiredtaste.net/wp-content/uploads/2011/12/How-to-Cook-Hard-Boiled-Eggs-2-1200.jpg"

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  recipeImage: {
    height: "10%",
    width: "10%"
  }
};

class MealListItem extends React.Component {
  state = {
  };

  render() {
    const { recipe } = this.props;

    return (
      <ListItem>
        <img src={imgUrl} style={styles.recipeImage}/>
        {recipe}
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default MealListItem;
