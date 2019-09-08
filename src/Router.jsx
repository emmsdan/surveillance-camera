import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/console" component={App} />
    </Router>
  );
}

export default AppRouter;
