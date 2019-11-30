import React from 'react';
import propTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const isExternal = (url) => window.location.host !== url.host;

const Link = ({
  children,
  to,
  className,
}) => (
  isExternal(to)
    ? <a className={className} href={to}>{children}</a>
    : <RouterLink className={className} to={to}>{children}</RouterLink>
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
