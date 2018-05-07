import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "20%",
    marginLeft: "40%",
    marginBottom: "5%",
  },
};

class PersonalizeButton extends React.Component {
  state = {
  };

  redirectToPersonalizationForm = () => {
    let personalizationFormUrl = 'https://goo.gl/forms/yJskFoVy8dukXhyE3'
    var win = window.open(personalizationFormUrl, '_blank');
    win.focus();
  }

  render() {
    return (
      <Button
        style={styles.root}
        variant="raised"
        color="secondary"
        onClick={this.redirectToPersonalizationForm}
      >
        Personalize Now!
      </Button>
    );
  }
}

export default PersonalizeButton;
