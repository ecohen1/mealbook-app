import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 3,
    width: '97%',
    margin: 'auto'
  },
};

function PaperSheet(props) {

  let combinedStyles = {...styles.root, ...props.moreStyles}

  return (
    <div>
      <Paper style={combinedStyles} elevation={props.noElevation ? 0 : 4}>
        {props.children}
      </Paper>
    </div>
  );
}

export default PaperSheet;
