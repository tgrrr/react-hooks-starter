import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import Routes from '../../pages/navigation/Routes/Routes';
import PageSections from '../../pages/PageSections/PageSections';

const App = () => (
  <ErrorBoundary componentName='App'>
    <PageStyled>
      <Routes>
        <PageSections />
      </Routes>
    </PageStyled>
  </ErrorBoundary>
);

const PageStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  text-align: center;
  font-size: calc(10px + 2vmin);
}
`;

export default App;
