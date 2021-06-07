import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import EditContactModal from '../../EditContactModal';

import styles from './ContactListItem.module.css';

class ContactListItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { name, number, id, deleteContact } = this.props;
    const { isModalOpen } = this.state;

    const handleDelete = () => {
      deleteContact(id);
    };

    return (
      <>
        <li className={styles.Contact}>
          <span className={styles.Info}>
            {name}: {number}
          </span>
          <button onClick={handleDelete} className={styles.Btn} type="button">
            Delete
          </button>
          <button
            onClick={this.handleToggleModal}
            className={styles.Btn}
            type="button"
          >
            Edit
          </button>
        </li>
        {isModalOpen && (
          <EditContactModal
            name={name}
            number={number}
            id={id}
            onToggleModal={this.handleToggleModal}
          />
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispath => ({
  deleteContact: id => dispath(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
