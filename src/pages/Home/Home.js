import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Link from '../../common/navigation/Link/Link'

const Home = () => (
  <ErrorBoundary componentName='Home'>
    <HomeStyled>
      <>
        Home <br />
        <Link to='login'><button data-id='Login__button'>Login Button</button></Link>
      </>
    </HomeStyled>
  </ErrorBoundary>
);

const HomeStyled = styled.div`
  .Home {}
`;

export default Home;
