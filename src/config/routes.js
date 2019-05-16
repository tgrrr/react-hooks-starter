import React from 'react';
import HomeContainer from '../pages/Home/HomeContainer';
import LoginContainer from '../pages/Login/LoginContainer';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomeContainer />,
    text: 'Home',
    private: false,
  },
  {
    path: '/home',
    // exact: true,
    main: () => <HomeContainer />,
    text: 'Home',
    private: false,
  },
  {
    path: '/login',
    main: () => <LoginContainer />,
    text: 'Login',
    private: false,
  },
];

export default routes;
