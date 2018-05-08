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
    height: "15%",
    width: "15%",
    marginRight: "5%",
  },
  recipeTitle: {
    fontSize: "2em",
  },
};

const imgUrl = "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/uh59Wh0/graph-icon-cartoon-illustration-hand-drawn-animation-transparent_4jnqw3uq__F0004.png"

class StatusList extends React.Component {
  state = {
  };

  render() {
    const { recipe } = this.props;

    return (
      <ListItem style={styles.root} button onClick={() => {}}>
        <img src={imgUrl} style={styles.recipeImage}/>
        <div style={styles.recipeTitle}>Your blood sugar has gone down 5 percent this week!</div>
      </ListItem>
    );
  }
}

export default StatusList;
