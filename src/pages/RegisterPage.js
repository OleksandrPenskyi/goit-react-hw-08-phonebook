import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const initialState = {
  name: '',
  email: '',
  password: '',
};

class RegisterPage extends Component {
  static propTypes = {
    onRegistration: PropTypes.func.isRequired,
  };

  state = initialState;

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitRegForm = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onRegistration(this.state);

    this.setState({ ...initialState });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <section onSubmit={this.onSubmitRegForm}>
        <h2>Please, fill the form to registration:</h2>
        <form>
          <label htmlFor="nameInput">Name:</label>
          <input
            onChange={this.onChangeInput}
            name="name"
            value={name}
            type="text"
            id="nameInput"
          />
          <label htmlFor="nameInput">E-mail:</label>
          <input
            onChange={this.onChangeInput}
            name="email"
            value={email}
            type="email"
            id="nameInput"
          />
          <label htmlFor="nameInput">Password:</label>
          <input
            onChange={this.onChangeInput}
            name="password"
            value={password}
            type="text"
            id="nameInput"
          />
          <button type="submit">Registration</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onRegistration: authOperations.registration,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
