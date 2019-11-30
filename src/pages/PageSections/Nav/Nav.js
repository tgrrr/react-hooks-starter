import React from 'react';
import {
  // Route,
  Link,
} from 'react-router-dom';
// import routes from '../../../config/routes';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
    {/* routes.map((route, index) => (
        <Route
          component={route.navbar}
          exact={route.exact}
          key={index}
          path={route.path}
        />
      )) */}
  </nav>
);

export default Nav;
