import React from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import { authSelectors } from '../../../redux/auth';

const UserMenu = ({ email, onLogout }) => (
  <section>
    <p>
      Welcome home, <b>{email}</b>!
    </p>
    <button onClick={onLogout} type="button">
      Выйти
    </button>
  </section>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
