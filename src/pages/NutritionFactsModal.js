import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from 'material-ui/Typography';

const styles = {
};

class NutritionFactsModal extends React.Component {

  render() {
    return (
      <Dialog aria-labelledby="simple-dialog-title" open={this.props.isOpen} onBackdropClick={this.props.closeModal} onClick={e=>e.stopPropagation()}>
        <img src={this.props.nutritionFactsUrl} />
      </Dialog>
    );
  }
}

export default NutritionFactsModal;
