/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    console.log('contacts:', data);
    dispatch(contactsActions.fetchContactSucess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};

const addContact = newContact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

// todo
// const patchContact = id => async dispatch => {

// }

export default { fetchContacts, addContact, deleteContact };
