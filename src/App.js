import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/Appbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            component={RegisterPage}
            restricted
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            component={LoginPage}
            restricted
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsPage}
            redirectTo="/login"
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

const mapDispatchToProps = {
  getUser: authOperations.refreshUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
