import React from 'react';
import Typography from 'material-ui/Typography';
import { ListItem } from 'material-ui/List';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto"
  },
  recipeImage: {
    // height: "150px",
    // width: "150px",
    // marginRight: "5%",
    height: "7%",
    width: "10%",
    // marginRight: "115px",
    marginRight: "5%",
    // marginLeft: "25px",
    marginLeft: "2%",

  },
  recipeTitle: {
    fontSize: "2em",
  },
};

const imgUrl = "/blood-sugar.png"

class StatusList extends React.Component {
  state = {
  };

  goToMetrics = () => {
    let url = '/tracking'
    window.location.href = url
  }

  render() {
    return (
      <ListItem style={styles.root} button onClick={this.goToMetrics}>
        <img src={imgUrl} style={styles.recipeImage}/>
        <div style={styles.recipeTitle}>
          <Typography variant="title" color="inherit" style={styles.hello}>
            By the numbers
          </Typography>
          <Typography variant="display1" color="inherit" style={styles.hello}>
            Your blood sugar has gone down 5&#37; this week! Click to see more.
          </Typography>
        </div>
      </ListItem>
    );
  }
}

export default StatusList;
