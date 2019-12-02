import React from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
} from 'react-router-dom';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';
import routes from '../../../config/routes';

const Main = () => (
  <ErrorBoundary componentName='Main'>
    <MainStyled>
      <main>
        <Switch>
          {routes.map((route, index) => (
            route.private
              ? <RoutePrivate
                component={route.main}
                exact={route.exact}
                key={index}
                path={route.path}
              />
              : <RoutePublic
                component={route.main}
                exact={route.exact}
                key={index}
                path={route.path}
              />
          ))}
        </Switch>
      </main>
    </MainStyled>
  </ErrorBoundary>
);

const MainStyled = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;

  .Main__link {
    color: #61dafb;
  }
`;

export default Main;
