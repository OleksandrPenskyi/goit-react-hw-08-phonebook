import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/Appbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  getUser: authOperations.refreshUser,
};

export default connect(null, mapDispatchToProps)(App);
