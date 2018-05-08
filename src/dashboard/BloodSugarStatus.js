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
    margin: "auto"
  },
  recipeImage: {
    height: "150px",
    width: "150px",
    marginRight: "5%",
  },
  recipeTitle: {
    fontSize: "2em",
  },
};

const imgUrl = "/blood-sugar.png"

class StatusList extends React.Component {
  state = {
  };

  goToMetrics = () => {
    let url = '/tracking'
    window.location.href = url
  }

  render() {
    const { recipe } = this.props;

    return (
      <ListItem style={styles.root} button onClick={this.goToMetrics}>
        <img src={imgUrl} style={styles.recipeImage}/>
        <div style={styles.recipeTitle}>
          <Typography variant="title" color="inherit" style={styles.hello}>
            By the numbers
          </Typography>
          <Typography variant="display1" color="inherit" style={styles.hello}>
            Your blood sugar has gone down 5&#37; this week! Click to see more.
          </Typography>
        </div>
      </ListItem>
    );
  }
}

export default StatusList;
