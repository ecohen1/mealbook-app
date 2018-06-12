import React from 'react';

import track from 'react-tracking';

import {isMobile} from 'react-device-detect';

import Add from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';


import * as firebase from "firebase";

import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Label
} from 'recharts'
import moment from 'moment'

var chartData = [
  { value: 130, time: 1528185600000 },
  { value: 140, time: 1528313734000 },
  { value: 220, time: 1528334134000 },
  { value: 130, time: 1528352434000 },
  { value: 150, time: 1528509094000 },
]

function ReferenceLabel(props) {
    const {
        fill, value, textAnchor,
        fontSize, viewBox, dy, dx,
    } = props;
    const x = viewBox.width + viewBox.x + 20;
    const y = viewBox.y - 6;
    return (
        <text
            x={x} y={y}
            dy={dy}
            dx={dx}
            fill={fill}
            fontSize={fontSize || 10}
            textAnchor={textAnchor}>
            'beans'
        </text>
    )
}

const styles = {
  root: {
    width: "100%",
    overflowX: 'hidden'
  },
  syncButton: {
    width: '20%',
    marginLeft: '20%',
    marginBottom: '10%',
    display: 'inline'
  },
  card: {
    width: '80%',
    margin: 'auto'
  },
  logTime: {
    marginLeft: '25%'
  },
  logDate: {
    marginLeft: '25%'
  },
  logValue: {

  },
  logTimeMobile: {
    marginLeft: '5%'
  },
  logDateMobile: {
    marginLeft: '5%'
  },
  logValueMobile: {

  }
};

@track((props) => {return { page: 'TrackingPage', username: props.search.user }}, { dispatchOnMount: true })
class TrackingApp extends React.Component {
  state = {
    loggingData: [
    ],
    username: this.props.search.user
  };

  componentDidMount = () => {
    this.getUserData(this.state.username)
  }

  getUserData = (userId) => {
    var self = this
    return firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val()) {
        let userData = snapshot.val();
        if (userData.loggingData) {
          self.setState({loggingData: userData.loggingData})
        }
      }
    });
  }

  logBloodSugar = () => {
    var bloodSugarValue = prompt("Blood sugar value:", "");
    if (bloodSugarValue == null || bloodSugarValue === "") {
        alert('Need to enter a valid blood sugar value.')
        return 0;
    }

    var bloodSugarTime = prompt("Time of reading:", "");
    if (bloodSugarTime == null || bloodSugarTime === "") {
        alert('Need to enter a valid time.')
        return 0;
    }

    var loggingData = this.state.loggingData
    var date = (new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + (new Date().getYear()-100)
    loggingData.push({value: bloodSugarValue, time: bloodSugarTime, date: date})
    firebase.database().ref('users/'+this.state.username).update({
      loggingData
    }).then(() => window.location.reload());

  }

  logMeal = () => {
    var mealName = prompt("Meal name:", "");
    if (mealName == null || mealName === "") {
        alert('Need to enter a valid meal name.')
        return 0;
    }

  }

  render() {
    var reversedLoggingData = this.state.loggingData
    reversedLoggingData.reverse()
    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <CardContent>

            <Button variant="raised" color="primary" style={styles.syncButton} onClick={this.logBloodSugar}>
              <Add />
              &nbsp;&nbsp;Log blood sugar
            </Button>
            <Button variant="raised" color="secondary" style={styles.syncButton} onClick={this.logMeal}>
              <Add />
              &nbsp;&nbsp;Log meal
            </Button>

            <ResponsiveContainer width='95%' height={500} >
              <ScatterChart>
                <XAxis
                  dataKey = 'time'
                  domain = {['auto', 'auto']}
                  name = 'Time'
                  tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm M/D')}
                  type = 'number'
                />
                <YAxis dataKey = 'value' name = 'Value' />
                <Tooltip cursor={false} formatter={(value, name, props) => name == "Time" ? moment(value).format('HH:mm M/D') : value} />
                <Scatter
                  data = {chartData}
                  line = {{ stroke: '#eee' }}
                  lineJointType = 'monotoneX'
                  lineType = 'joint'
                  name = 'Values'
                />
                <ReferenceLine x={1528245600000} stroke="green" yAxisId="left" label="Avocado Salad"/>
                <ReferenceLine x={1528316734000} stroke="red" yAxisId="left" label="Chicken Fried Rice"/>
                <ReferenceLine x={1528422434000} stroke="green" yAxisId="left" label="Power Granola"/>
                <ReferenceLine x={1528482434000} stroke="green" yAxisId="left" label="Black Bean Patties"/>


              </ScatterChart>
            </ResponsiveContainer>

          </CardContent>
        </Card>
      </div>
    )
  }
}

export default TrackingApp;
