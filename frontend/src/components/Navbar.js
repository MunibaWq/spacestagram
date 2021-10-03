import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import logo from '../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'black',
    // background: 'transparent',
    color: 'black',
    boxShadow: 'none',
    height: '100px'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static'>
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
