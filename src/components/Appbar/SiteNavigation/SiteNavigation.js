import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

const SiteNavigation = ({ isUserLogin }) => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    {isUserLogin && (
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    )}
  </ul>
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(SiteNavigation);
