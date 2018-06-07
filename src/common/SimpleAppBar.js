import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import {isMobile} from 'react-device-detect';

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    width: "16%",
    // height: "80%",
    marginTop: "0.5%",
    marginBottom: "0.5%",
    cursor: 'pointer'
  },
  logoMobile: {
    width: "40%",
    // height: "80%",
    marginTop: "0.5%",
    marginBottom: "0.5%",
    marginLeft: "20%",
    cursor: 'pointer'
  },
  appBar: {
    backgroundColor: "white",
    zIndex: '9999 !important',
    position: 'fixed',
    top: '0',
    height: '7%',
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
    var idIndex = window.location.search.indexOf('&id=') >= 0 ? window.location.search.indexOf('&id=') : window.location.search.length
    window.location.href = '/' + window.location.search.substring(0, idIndex);
  }

  // redirectToProfile = () => {
  //   window.location.href = '/profile' + window.location.search
  // }
  //
  // redirectToMetrics = () => {
  //   window.location.href = '/tracking' + window.location.search
  // }
  //
  // handleMenu = (e) => {
  //   this.setState({open: true, anchorEl: e.currentTarget})
  // }
  //
  // handleClose = () => {
  //   this.setState({open: false, anchorEl: null})
  // }
  //
  // handleLogout = () => {
  //   this.props.logout()
  //   window.location.reload()
  // }

  render() {
    let fullName = this.props.username.split('-')[0].charAt(0).toUpperCase() + this.props.username.split('-')[0].substr(1);
    return (
      <div style={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          <Toolbar>
            {isMobile ?
              <IconButton color="inherit" aria-label="Menu" onClick={this.props.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              : ''
            }

            <img src="mealbook-logo-small.png" style={isMobile ? styles.logoMobile : styles.logo} onClick={this.redirectToDashboard}/>

            {true ? '' :
              <Typography variant="title" color="inherit" style={styles.hello}>
                Welcome, {fullName}!
              </Typography>
            }
            {true ? '' :
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
            }
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default SimpleAppBar;
