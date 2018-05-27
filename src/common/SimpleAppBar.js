import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

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
    marginLeft: '49%',
    marginRight: '1%',
    width: '30%',
    textAlign: 'right'
  },
  accountIcon: {
    fontSize: '2em'
  }
};

class SimpleAppBar extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  redirectToDashboard = () => {
    window.location.href = '/' + window.location.search
  }

  redirectToProfile = () => {
    window.location.href = '/profile' + window.location.search
  }

  redirectToMetrics = () => {
    window.location.href = '/tracking' + window.location.search
  }

  handleMenu = (e) => {
    this.setState({open: true, anchorEl: e.currentTarget})
  }

  handleClose = () => {
    this.setState({open: false, anchorEl: null})
  }

  redirectToLink = () => {
    window.location.href = '/' + window.location.search
  }

  handleLogout = () => {
    this.props.logout()
    window.location.reload()
  }

  render() {
    let fullName = this.props.username.split('-')[0].charAt(0).toUpperCase() + this.props.username.split('-')[0].substr(1);
    return (
      <div style={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          <Toolbar>
            {true ? '' :
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            }

            <img src="mealbook-logo-small.png" style={styles.logo} onClick={this.redirectToLink}/>

            <Typography variant="title" color="inherit" style={styles.hello}>
              Welcome, {fullName}!
            </Typography>

            <div>
              <IconButton
                aria-owns={'menu-appbar'}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle style={styles.accountIcon} />
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
                <MenuItem onClick={this.redirectToDashboard}>Meals</MenuItem>
                <MenuItem onClick={this.redirectToProfile}>Profile</MenuItem>
                {true ? '' : <MenuItem onClick={this.redirectToMetrics}>Tracking</MenuItem> }
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
