import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteNavigation = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/contacts">Contacts</NavLink>
    </li>
  </ul>
);

export default SiteNavigation;
