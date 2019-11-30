import React from 'react';
import {
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';

function usePageViews() {
  const location = useLocation();
  React.useEffect(() => {
    // TODO: ga.send(['pageview', location.pathname]);
  }, [location]);
}

const Routes = ({ children }) => {
  usePageViews();
  return (
    <Router>
      {children}
    </Router>
  );
};

export default Routes;
