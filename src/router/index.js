import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { history } from '../store';
import { Home, Detail } from '../pages';
function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Route
        path='/'
        exact
        component={Home}
      />
      <Route
        path='/loan/:id'
        exact
        component={Detail}
      />
    </ConnectedRouter>
  );
}

export default Routes;
