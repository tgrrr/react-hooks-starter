import React, { useState } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

// WIP:
// TODO: refactor this logic to another file
// export const isAuth = {
//   isAuthenticated: false,
//   authenticate(jwt) {
//     this.isAuthenticated = true;
//   },
//   signout(jwt) {
//     this.isAuthenticated = false;
//   },
// };

// TODO: notification if redirected to login page
function RoutePrivate({ component: Component, location, ...rest }) {
// TODO state and context
  const [loginToken] = useState('loginToken');

  return (
    <Route
      {...rest}
      render={(props) => (loginToken ? (
        <Component {...props} />
      ) : (
        <>
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        </>
      ))
      }
    />
  );
}

export default RoutePrivate;
