import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary'

const Menu = () => (
  <ErrorBoundary componentName='Menu'>
    <MenuStyled>
      <>
        Menu
      </>
    </MenuStyled>
  </ErrorBoundary>
);

const MenuStyled = styled.div`
  .Menu {
  }
`;

export default Menu;
