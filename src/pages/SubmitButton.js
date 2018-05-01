import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function SubmitButton(props) {
  const { classes, onClick } = props;
  return (
    <div>
      <Button variant="raised" color="primary" className={classes.button} onClick={onClick}>
        Save this
      </Button>
    </div>
  );
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);
