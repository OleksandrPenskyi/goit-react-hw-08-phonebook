import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

import styles from './Filter.module.css';

const Filter = ({ onChangeFilter, filter }) => {
  const randomIdForFilter = uuidv4();

  return (
    <>
      <label htmlFor={randomIdForFilter} className={styles.Label}>
        Find contacts by name
      </label>
      <input
        onChange={onChangeFilter}
        type="text"
        name="filter"
        value={filter}
        id={randomIdForFilter}
        className={styles.Input}
      />
    </>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(contactsActions.filterValue(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
