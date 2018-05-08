import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import BloodSugarStatus from './BloodSugarStatus'
import DailyTip from './DailyTip'
import PaperSheet from '../common/PaperSheet'

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto"
  },
};

class StatusList extends React.Component {
  state = {
  };

  render() {

    return (
      <List style={styles.root}>
        <PaperSheet>
          <BloodSugarStatus />
        </PaperSheet>
        <br></br>
        <PaperSheet>
          <DailyTip />
        </PaperSheet>
      </List>
    );
  }
}

export default StatusList;
