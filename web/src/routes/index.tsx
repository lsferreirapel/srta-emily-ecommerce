/* React imports */
import React from 'react';

/* APIs import */
import { Switch, Route } from 'react-router-dom';

/* Pages */
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
