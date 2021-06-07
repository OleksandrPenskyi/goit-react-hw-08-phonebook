import React from 'react';
import SiteNavigation from './SiteNavigation';
import AuthNavigation from './AuthNavigation';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

const AppBar = ({ isUserLogin }) => (
  <header>
    <SiteNavigation />
    {isUserLogin ? <UserMenu /> : <AuthNavigation />}
  </header>
);

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(AppBar);
