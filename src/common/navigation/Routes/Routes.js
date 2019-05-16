import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../config/routes';
import { generateUuid } from '../../util';
import NoMatch from './NoMatch';

const Routes = () =>
  <Switch>
    {routes.map(route => (
      <Route
        key={generateUuid()}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
    <Route component={NoMatch} />
  </Switch>

export default Routes;
