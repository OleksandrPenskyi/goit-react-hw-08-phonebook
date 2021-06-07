import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import styles from './EditContactModal.module.css';

const modalRoot = document.querySelector('#modal-root');

class EditContactModal extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
    id: this.props.id,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangesSubmit = event => {
    event.preventDefault();

    this.props.editContact(this.state);
    this.props.onToggleModal();
  };

  handleCancelChange = () => {
    this.props.onToggleModal();

    this.setState({
      name: this.props.name,
      number: this.props.number,
      id: this.props.id,
    });
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleCloseModal} className={styles.Overlay}>
        <div className={styles.Modal}>
          <form onSubmit={this.handleChangesSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input
              onChange={this.handleChangeInput}
              name="name"
              id="nameInput"
              type="text"
              value={this.state.name}
            />

            <label htmlFor="numberInput">Number</label>
            <input
              onChange={this.handleChangeInput}
              name="number"
              id="numberInput"
              type="number"
              value={this.state.number}
            />
            <button onClick={this.handleCancelChange} type="button">
              Cancel
            </button>
            <button type="submit">Save changes</button>
          </form>
        </div>
      </div>,
      modalRoot,
    );
  }
}

const mapDispatchToProps = {
  editContact: contactsOperations.patchContact,
};

export default connect(null, mapDispatchToProps)(EditContactModal);
