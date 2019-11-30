import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import Link from '../Link/Link';

function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>
        404: No page found for <code>{location.pathname}</code> <p />
        <Link className='NoMatch__link' to='/'>Go Home</Link>
      </h3>
    </div>
  );
}

export default NoMatch;
