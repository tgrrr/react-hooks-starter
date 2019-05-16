import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary componentName='App'>
      <AppStyled>
        <header className="App__header">
          Header
        </header>
        <div className="App__main">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App__link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <footer className="App__footer">
          Footer
        </footer>

      </AppStyled>
    </ErrorBoundary>
  );
};

const AppStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  text-align: center;
  font-size: calc(10px + 2vmin);

  .App__header {
    background-color: white;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
  }
  
  .App__main {
    background-color: black;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    .App__link {
      color: #61dafb;
    }
  }
  .App__footer {
    background-color: grey;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
}
`;

export default App;
