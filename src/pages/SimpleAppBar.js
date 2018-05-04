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
  logo: {
    width: "20%",
    marginTop: "0.5%",
    marginBottom: "0.5%"
  }
};

function SimpleAppBar(props) {
  // const { classes } = props;

  return (
    <div style={styles.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img src="mealbook-logo-small.png" style={styles.logo}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;

// <Typography variant="title" color="inherit">
//   MealBook
// </Typography>
