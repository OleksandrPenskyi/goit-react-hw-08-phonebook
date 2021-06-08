import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },

  title: {
    fontSize: 40,
    fontWeight: 700,
    textAlign: 'center',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>
        Добро пожаловать в приложение: "Записная книжка"!
      </Typography>
    </Box>
  );
};

export default HomePage;
