import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    marginRight: 20,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
});

const AuthNavigation = () => {
  const classes = useStyles();

  return (
    <Box>
      <Button
        type="button"
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        <NavLink to="/login" className={classes.link}>
          Login
        </NavLink>
      </Button>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        className={classes.btn}
      >
        <NavLink to="/register" className={classes.link}>
          Registration
        </NavLink>
      </Button>
    </Box>
  );
};

export default AuthNavigation;
