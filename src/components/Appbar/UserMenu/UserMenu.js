import React from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import { authSelectors } from '../../../redux/auth';
import { Box, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  section: {
    display: 'flex',
    alignItems: 'center',
  },

  btn: {
    marginRight: 20,
  },
  text: {
    marginRight: 20,
  },
});

const UserMenu = ({ email, onLogout }) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.section}>
      <Typography className={classes.text}>
        Welcome, <b>{email}</b>
      </Typography>
      <Button
        onClick={onLogout}
        type="button"
        variant="contained"
        color="secondary"
        className={classes.btn}
      >
        LEAVE
      </Button>
    </Box>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
