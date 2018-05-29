import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import track from 'react-tracking';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Face from '@material-ui/icons/Face';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import {isMobile} from 'react-device-detect';

import RecipeApp from '../recipes/RecipeApp';
import AdminApp from '../admin/AdminApp';
import RecipeInfoApp from '../recipeInfo/RecipeInfoApp';
import DashboardApp from '../dashboard/DashboardApp'
import TrackingApp from '../tracking/TrackingApp'
import ProfileApp from '../profile/ProfileApp'
import LoginForm from '../common/LoginForm'
import SimpleAppBar from '../common/SimpleAppBar'

import * as firebase from "firebase";
var config = {
  // apiKey: "<API_KEY>",
  authDomain: "mealbook-app.firebaseapp.com",
  databaseURL: "https://mealbook-app.firebaseio.com/",
  storageBucket: "mealbook-app.appspot.com",
};
firebase.initializeApp(config);

const styles = {
  drawerPaper: {
    zIndex: 1,
    position: 'relative'
  },
  listItem: {
  },
  selectedListItem: {
    // backgroundColor: '#ededed'
    // backgroundColor: '#ffc291'
    backgroundColor: '#f9d1b1'

  },
  list: {
    width: window.innerWidth*0.15,
    marginTop: '30%'
  },
  listMobile: {
    width: window.innerWidth*0.75,
    marginTop: '30%'
  },
  main: {
    width: '85%',
    marginLeft: '15%',
    marginTop: '5%',
  },
  mainMobile: {
    marginTop: '15%',
  },
  menuIcon: {
    fontSize: '1em'
  },
  hello: {
    textAlign: 'center',
    marginBottom: '5%'
  }
}

@track({}, { dispatch: (data) => {
  firebase.database().ref('users/' + data.username).once('value').then(function(snapshot) {
    if (snapshot.val()) {
      let userData = snapshot.val();
      var trackingData = userData.trackingData;
      trackingData ? trackingData.push(data) : trackingData = [data];
      firebase.database().ref('users/' + data.username).update({
        trackingData
      });
    }
  })
}})
class Root extends React.Component {
  state = {
    search: {},
    drawerOpen: !isMobile
  };

  componentDidMount() {
    let search = {}
    window.location.search.substring(1).split('&')
              .filter((param) => param !== "")
              .map((param) => {
                return param.split("=")
              })
              .forEach((paramPair) => {
                search[paramPair[0]] = paramPair[1]
              })
    this.setState({search})
  }

  login = () => {
    localStorage.setItem(this.state.search.user + 'LoggedIn', true)
    window.location.reload()
  }

  logout = () => {
    localStorage.removeItem(this.state.search.user + 'LoggedIn')
    window.location.reload()
  }

  redirectToMeals = () => {
    // window.location.href = '/' + window.location.search
    var idIndex = window.location.search.indexOf('&id=') >= 0 ? window.location.search.indexOf('&id=') : window.location.search.length
    window.location.href = '/' + window.location.search.substring(0, idIndex);
  }

  redirectToProfile = () => {
    // window.location.href = '/profile' + window.location.search
    var idIndex = window.location.search.indexOf('&id=') >= 0 ? window.location.search.indexOf('&id=') : window.location.search.length
    window.location.href = '/profile' + window.location.search.substring(0, idIndex);
  }

  toggleDrawer = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render() {
    let path = window.location.pathname.substring(1)
    let fullName = ''
    if (this.state.search.user) {
      fullName = this.state.search.user.includes('-') ?
                      this.state.search.user.split('-')[0].charAt(0).toUpperCase() + this.state.search.user.split('-')[0].substr(1)
                      :
                      this.state.search.user.charAt(0).toUpperCase() + this.state.search.user.substr(1)
    }
    return (
      <div>
        {localStorage.getItem(this.state.search.user + 'LoggedIn') ?
          <div>
            <SimpleAppBar loggedIn={true} logout={this.logout} username={this.state.search.user}
              toggleDrawer={this.toggleDrawer}/>
            <div>
              <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={this.state.drawerOpen}
                style={styles.drawerPaper}
                ModalProps={{onBackdropClick: this.toggleDrawer}}
              >
                <List style={isMobile ? styles.listMobile : styles.list}>
                  <Typography variant="display1" color="inherit" style={styles.hello}>
                    Welcome, {fullName}!
                  </Typography>

                  <Divider />

                  <ListItem button style={path === '' ? styles.selectedListItem : styles.listItem} onClick={this.redirectToMeals}>
                    <Typography variant="display1" color="inherit" style={styles.listItemTitle}>
                      <ShoppingBasket style={styles.menuIcon}/>&nbsp;&nbsp;
                      Meals
                    </Typography>
                  </ListItem>

                  <Divider />

                  <ListItem button style={path === 'profile' ? styles.selectedListItem : styles.listItem} onClick={this.redirectToProfile}>
                    <Typography variant="display1" color="inherit" style={styles.listItemTitle}>
                      <Face style={styles.menuIcon}/>&nbsp;&nbsp;
                      Profile
                    </Typography>
                  </ListItem>

                  <Divider />

                  <ListItem button style={styles.listItem} onClick={this.logout}>
                    <Typography variant="display1" color="inherit" style={styles.listItemTitle}>
                      <KeyboardBackspace style={styles.menuIcon}/>&nbsp;&nbsp;
                      Log out
                    </Typography>
                  </ListItem>
                </List>
              </Drawer>

              <div style={isMobile ? styles.mainMobile : styles.main}>
                <Router>
                  <Switch>
                    <Route path="/" render={()=><DashboardApp search={this.state.search}/>} exact />
                    <Route path="/recipes" render={()=><RecipeApp search={this.state.search}/>} exact />
                    <Route path="/admin" render={()=><AdminApp search={this.state.search}/>} exact />
                    <Route path="/recipe-info" render={()=><RecipeInfoApp search={this.state.search}/>} exact />
                    <Route path="/tracking" render={()=><TrackingApp search={this.state.search}/>} exact />
                    <Route path="/profile" render={()=><ProfileApp search={this.state.search}/>} exact />
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
          :
          <LoginForm login={this.login} user={this.state.search.user}/>
        }
      </div>
    );
  }
};

export default Root;
