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

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "50%",
    margin: "auto"
  },
  recipeImage: {
    height: "150px",
    width: "100px",
    marginRight: "115px",
    marginLeft: "25px",
  },
  recipeTitle: {
    fontSize: "2em"
  }
};

// const imgUrl = "https://cdn.dribbble.com/users/17619/screenshots/318757/400.png"
const imgUrl = "/daily-tip.png"

class DailyTip extends React.Component {
  state = {
  };

  render() {
    const { recipe } = this.props;

    return (
      <ListItem style={styles.root} button onClick={() => {}}>
        <img src={imgUrl} style={styles.recipeImage}/>
        <div style={styles.recipeTitle}>
          <Typography variant="title" color="inherit" style={styles.hello}>
            Daily Tip
          </Typography>
          <Typography variant="display1" color="inherit" style={styles.hello}>
            Fiber and protein help keep blood sugar steady and reduce the risk of future complications!
          </Typography>
        </div>
      </ListItem>
    );
  }
}

export default DailyTip;
