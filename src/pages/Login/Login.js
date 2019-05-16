import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const Login = () => (
  <ErrorBoundary componentName='Login'>
    <LoginStyled>
      <div>
        Login Page
      </div>
    </LoginStyled>
  </ErrorBoundary>
);

const LoginStyled = styled.div`
  .Login {}
`;

export default Login;
