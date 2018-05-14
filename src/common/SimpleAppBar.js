import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "2%"
  },
  logo: {
    width: "16%",
    // height: "80%",
    marginTop: "0.5%",
    marginBottom: "0.5%",
    cursor: 'pointer'
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

  redirectToProfile = () => {
    window.location.href = '/profile'
  }

  handleMenu = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget})
  }

  handleClose = () => {
    this.setState({open: false, anchorEl: null})
  }

  redirectToLink = () => {
    window.location.href = '/'
  }

  handleLogout = () => {
    this.props.logout()
    window.location.reload()
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          <Toolbar>
            <img src="mealbook-logo-small.png" style={styles.logo} onClick={this.redirectToLink}/>

            <Typography variant="title" color="inherit" style={styles.hello}>
              Welcome, Eli!
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
                <MenuItem onClick={this.redirectToProfile}>Profile</MenuItem>
                <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default SimpleAppBar;
