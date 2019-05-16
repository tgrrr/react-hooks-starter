import React from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Login from './Login'

const LoginContainer = () => {
  // TODO: add state here
  return (
    <ErrorBoundary componentName='LoginContainer'>
      <Login />
    </ErrorBoundary>
  );
};

export default LoginContainer;
