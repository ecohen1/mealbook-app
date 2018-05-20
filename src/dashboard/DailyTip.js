import React from 'react';
import Typography from 'material-ui/Typography';
import { ListItem } from 'material-ui/List';

const styles = {
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "50%",
    margin: "auto"
  },
  recipeImage: {
    height: "6%",
    width: "6%",
    // marginRight: "115px",
    marginRight: "7%",
    // marginLeft: "25px",
    marginLeft: "4%",
  },
  recipeTitle: {
    fontSize: "2em"
  }
};

// const imgUrl = "https://cdn.dribbble.com/users/17619/screenshots/318757/400.png"
const imgUrl = "/daily-tip.png"

class DailyTip extends React.Component {
  state = {
  };

  render() {
    return (
      <ListItem style={styles.root} button onClick={() => {}}>
        <img src={imgUrl} style={styles.recipeImage}/>
        <div style={styles.recipeTitle}>
          <Typography variant="title" color="inherit" style={styles.hello}>
            Weekly Goal
          </Typography>
          <Typography variant="display1" color="inherit" style={styles.hello}>
            Lose 1 pound this week and get a bonus video from your nutritionist!
          </Typography>
        </div>
      </ListItem>
    );
  }
}
// Try keeping your average blood sugar below 130 mg/dL at least once this week!

export default DailyTip;
