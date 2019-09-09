import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './redux/Store';
function AppRouter() {
  return (
    <Router>
      <Provider store={Store}>
        <Route exact path="/" component={App} />
        <Route path="/console" component={App} />
      </Provider>
    </Router>
  );
}

export default AppRouter;
