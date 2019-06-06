import React from 'react';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary'
import HeaderStyled from './HeaderStyled';
import Link from '../../../common/navigation/Link/Link'
import { Button } from '../../../common/ui/ui';


const Header = () => (
  <ErrorBoundary componentName='Header'>
    <HeaderStyled>
      <>
        <header className="App__header">
          Header
        </header>
        <Link to='login'><Button data-testid='Main__login--button'>Login Button</Button></Link>

      </>
    </HeaderStyled>
  </ErrorBoundary>
);

export default Header;
