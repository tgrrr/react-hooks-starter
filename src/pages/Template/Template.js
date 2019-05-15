import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const Template = () => (
  <ErrorBoundary componentName='Template'>
    <TemplateStyled>
      <>
        Template
      </>
    </TemplateStyled>
  </ErrorBoundary>
);

const TemplateStyled = styled.div`
  .Template {
  }
`;

export default Template;
