import React from 'react';
import SiteNavigation from './SiteNavigation';
import AuthNavigation from './AuthNavigation';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';

const AppBar = ({ isLogin }) => (
  <header>
    <SiteNavigation />
    {isLogin ? <UserMenu /> : <AuthNavigation />}
  </header>
);

const mapStateToProps = state => ({
  isLogin: !!state.auth.token,
});

export default connect(mapStateToProps)(AppBar);
