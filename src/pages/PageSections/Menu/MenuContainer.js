import React from 'react';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary'
import Menu from './Menu'

const MenuContainer = () => {
  // TODO: add state here
  return (
    <ErrorBoundary componentName='MenuContainer'>
      <>
        <Menu />
      </>
    </ErrorBoundary>
  );
};

export default MenuContainer;
