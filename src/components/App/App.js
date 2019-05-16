import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import history from '../../common/navigation/history'
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import PageSections from '../../pages/PageSections/PageSections'

const App = () =>
  <ErrorBoundary componentName='App'>
    <Router history={history}>
      <AppStyled>
        <PageSections />
      </AppStyled>
    </Router>
  </ErrorBoundary>

const AppStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  text-align: center;
  font-size: calc(10px + 2vmin);
}
`;

export default App;
