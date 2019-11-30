import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';
import Nav from '../Nav/Nav';


const Header = () => (
  <ErrorBoundary componentName='Header'>
    <HeaderStyled>
      <>
        <header className="App__header">
          <Nav />
        </header>
      </>
    </HeaderStyled>
  </ErrorBoundary>
);

const HeaderStyled = styled.div`
  background-color: white;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

export default Header;
