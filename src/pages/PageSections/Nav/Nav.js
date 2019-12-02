import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
  </nav>
);

export default Nav;
