import React from 'react';
import propTypes from 'prop-types';

import HashLink from 'react-router-hash-link';

const isExternal = url => window.location.host !== url.host;

const Link = ({
  children,
  to,
  className,
}) => (
  isExternal(to)
    ? <a href={to} className={className}>{children}</a>
    : <HashLink to={to} className={className}>{children}</HashLink>
);

Link.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  to: propTypes.string.isRequired,
};

Link.defaultProps = {
  className: '',
};


export default Link;
