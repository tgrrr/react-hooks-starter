import React from 'react';
import { Route } from 'react-router-dom';

// TODO: automatic redirect on login page and home page for authenticated users

const RoutePublic = ({ ...props }) => <Route {...props} />;

export default RoutePublic;
