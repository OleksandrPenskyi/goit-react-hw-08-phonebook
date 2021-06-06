import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authOperations } from '../redux/auth';

const initialState = { email: '', password: '' };

class LoginPage extends Component {
  static PpropTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = initialState;

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitLoginForm = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ ...initialState });
  };

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <h2>Please, fill the form to login:</h2>
        <form onSubmit={this.onSubmitLoginForm}>
          <label htmlFor="userEmail">E-mail:</label>
          <input
            onChange={this.onChangeInput}
            name="email"
            id="userEmail"
            type="email"
            value={email}
          />

          <label htmlFor="userPassword">Password:</label>
          <input
            onChange={this.onChangeInput}
            name="password"
            id="userPassword"
            type="text"
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
