import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Link from '../../common/navigation/Link/Link'
import { Input, Button } from '../../common/ui/ui';

const Home = () => (
  <ErrorBoundary componentName='Home'>
    <HomeStyled>
      <>
        <h1>Home</h1>
        <Input name="title" value="" placeholder="boop" fullWidth />
        <Link to='login'><Button data-testid='Header__login--button'>Login Button</Button></Link>
      </>
    </HomeStyled>
  </ErrorBoundary>
);

const HomeStyled = styled.div`
  .Home {}
`;

export default Home;
