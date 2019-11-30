import React from 'react';
import HomeContainer from '../pages/Home/HomeContainer';
import LoginContainer from '../pages/Login/LoginContainer';
import NoMatch from '../pages/navigation/Routes/NoMatch';

/* eslint-disable react/display-name */
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomeContainer />,
    navbar: () => <div>home!</div>,
    text: 'Home',
    private: false,
  },
  {
    path: '/home',
    exact: true,
    main: () => <HomeContainer />,
    navbar: () => <div>Home Page</div>,
    text: 'Home',
    private: false,
  },
  {
    path: '/login',
    main: () => <LoginContainer />,
    navbar: () => <div>Login</div>,
    text: 'Login',
    private: false,
  },
  {
    main: () => <NoMatch />,
    navbar: () => <div>Login</div>,
    text: 'Login',
    private: false,
  },
];
/* eslint-enable react/display-name */

export default routes;
