import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';

const Footer = () => (
  <ErrorBoundary componentName='Footer'>
    <FooterStyled>
      <>
        <footer>
          Footer
        </footer>
      </>
    </FooterStyled>
  </ErrorBoundary>
);

const FooterStyled = styled.div`
  background-color: grey;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default Footer;
