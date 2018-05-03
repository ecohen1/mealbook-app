import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "5%"
  },
};

function SimpleAppBar(props) {
  // const { classes } = props;
  
  return (
    <div className={styles.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MealBook
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;
