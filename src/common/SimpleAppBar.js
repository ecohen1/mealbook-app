import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "0%"
  },
  logo: {
    width: "20%",
    marginTop: "0.5%",
    marginBottom: "0.5%"
  },
  appBar: {
    backgroundColor: "white"
  },
  hello: {
    marginLeft: '50%',
    width: '30%',
    textAlign: 'right'
  }
};

class SimpleAppBar extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleMenu = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget})
  }

  handleClose = () => {
    this.setState({open: false, anchorEl: null})
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          <Toolbar>
            <img src="mealbook-logo-small.png" style={styles.logo}/>

            <Typography variant="title" color="inherit" style={styles.hello}>
              Welcome, Clare!
            </Typography>

            <div>
              <IconButton
                aria-owns={'menu-appbar'}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default SimpleAppBar;
