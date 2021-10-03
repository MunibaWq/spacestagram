import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import logo from '../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'transparent',
    color: 'black',
    boxShadow: 'none',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='absolute'>
      <Toolbar>
        <Typography
          variant='h5'
          noWrap
          component='div'
          sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
        >
          <img src={logo} alt={logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
