import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = () => (
  <ul>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/register">Registration</NavLink>
    </li>
  </ul>
);

export default AuthNavigation;
