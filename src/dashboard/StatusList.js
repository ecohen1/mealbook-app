import React from 'react';
import List from 'material-ui/List';

import BloodSugarStatus from './BloodSugarStatus'
import DailyTip from './DailyTip'
import PaperSheet from '../common/PaperSheet'

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto"
  },
  paperSheet: {
    // width: '95%',
    // margin: 'auto'
  }
};

class StatusList extends React.Component {
  state = {
  };

  render() {

    return (
      <List style={styles.root}>
        <PaperSheet style={styles.paperSheet}>
          <BloodSugarStatus />
        </PaperSheet>
        <br></br>
        <PaperSheet style={styles.paperSheet}>
          <DailyTip />
        </PaperSheet>
      </List>
    );
  }
}

export default StatusList;
