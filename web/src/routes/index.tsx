/* React imports */
import React from 'react';

/* APIs import */
import { Switch, Route } from 'react-router-dom';

/* Pages */
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
