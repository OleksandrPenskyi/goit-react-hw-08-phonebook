import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../Loader';
import Error from '../Error';
import { contactsSelectors } from '../../redux/contacts';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: 600,
  },
});

const Phonebook = ({ title, children, isLoading, error }) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.wrapper}>
      <h1>{title}</h1>
      {isLoading && <Loading />}

      {children}
      {error && <Error />}
    </Box>
  );
};

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
  error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(Phonebook);

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
