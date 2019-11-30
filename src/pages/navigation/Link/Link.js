import React from 'react';
import propTypes from 'prop-types';

import HashLink from 'react-router-hash-link';

const isExternal = (url) => window.location.host !== url.host;

const Link = ({
  children,
  to,
  className,
}) => (
  isExternal(to)
    ? <a className={className} href={to}>{children}</a>
    : <HashLink className={className} to={to}>{children}</HashLink>
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
