import React, { Component } from 'react';
import Phonebook from '../components/Phonebook';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

class ContactsPage extends Component {
  state = {};
  render() {
    const { isUserLogin } = this.props;
    return (
      <Phonebook title={'Phonebook'}>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {/* {isUserLogin && <ContactList />} */}
      </Phonebook>
    );
  }
}

const mapStateToProps = state => ({
  isUserLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(ContactsPage);
