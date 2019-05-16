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
    background-color: black;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    .Main__link {
      color: #61dafb;
    }

`;

export default Main;
