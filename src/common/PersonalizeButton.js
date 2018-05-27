import React from 'react';
import Button from '@material-ui/core/Button';

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
