import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={App} exact />
    </Router>
  );
};

export default Root;
