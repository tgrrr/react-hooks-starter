import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/ui/ui';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Link from '../../common/navigation/Link/Link'

const Home = () => (
  <ErrorBoundary componentName='Home'>
    <HomeStyled>
      <>
        Home <br />
        <Link to='login'><Button data-id='Login__button'>Login Button</Button></Link>
      </>
    </HomeStyled>
  </ErrorBoundary>
);

const HomeStyled = styled.div`
  .Home {}
`;

export default Home;
