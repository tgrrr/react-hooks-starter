import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';
import Routes from '../../../common/navigation/Routes/Routes';

const Main = () =>
  <ErrorBoundary componentName='Main'>
    <MainStyled>
      <Routes />
    </MainStyled>
  </ErrorBoundary>

const MainStyled = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;

  .Main__link {
    color: #61dafb;
  }
`;

export default Main;
