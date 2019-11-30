import React from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import Home from './Home';

const HomeContainer = () => (
  // TODO: add state here
  <ErrorBoundary componentName='HomeContainer'>
    <Home />
  </ErrorBoundary>
);

export default HomeContainer;
