import React from 'react';
import Link from '../Link/Link';

function NoMatch() {
  return (
    <h3>
        404: No page found for <code>{window.location.href}</code> <p />
      <Link className='NoMatch__link' to='/'>Go Home</Link>
    </h3>
  );
}

export default NoMatch;
