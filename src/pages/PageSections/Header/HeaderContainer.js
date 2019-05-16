import React from 'react';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary'
import Header from './Header'

const HeaderContainer = () => {
  // TODO: add state here
  return (
    <ErrorBoundary componentName='HeaderContainer'>
      <>
        <Header />
      </>
    </ErrorBoundary>
  );
};

export default HeaderContainer;
