import React from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Template from './Template'

const TemplateContainer = () => {
  // TODO: add state here
  return (
    <ErrorBoundary componentName='TemplateContainer'>
      <>
        <Template />
      </>
    </ErrorBoundary>
  );
};

export default TemplateContainer;
