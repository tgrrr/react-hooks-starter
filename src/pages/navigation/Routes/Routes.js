import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
// import routes from '../../../config/routes';
// import { generateUuid } from '../../../common/utils';
import NoMatch from './NoMatch';

function usePageViews() {
  const location = useLocation();
  React.useEffect(() => {
    // ga.send(['pageview', location.pathname]);
  }, [location]);
}

const Routes = ({ children }) => {
  usePageViews();
  return (
    <Switch>
      <Router>
        {children}
        <Route component={NoMatch} />
      </Router>
    </Switch>
  );
};

// const Routes = () => (
//
//   <Router>
//     <Switch>
//       {routes.map((route) => (
//         <Route
//           component={route.main}
//           exact={route.exact}
//           key={generateUuid()}
//           path={route.path}
//         />
//       ))}
//       <Route component={NoMatch} />
//     </Switch>
//   </Router>
// );

export default Routes;
