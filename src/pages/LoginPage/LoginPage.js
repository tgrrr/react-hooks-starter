import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import LoginContainer from '../../components/Login/LoginContainer'

const LoginPage = () => (
  <ErrorBoundary componentName='LoginPage'>
    <LoginPageStyled>
      <>
        LoginPage <br />
        <LoginContainer />
      </>
    </LoginPageStyled>
  </ErrorBoundary>
);

const LoginPageStyled = styled.div`
  .LoginPage {}
`;

export default LoginPage;
