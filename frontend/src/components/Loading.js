import { makeStyles } from '@material-ui/core';
import React from 'react';
import LoadingIcon from '../assets/loading.svg';

const useStyles = makeStyles(theme => ({
  spinner: {
    animation: '$spin 5s infinite'
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(180deg)'
    },
    '100%': {
      transform: 'rotate(0deg)'
    }
  }
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <img src={LoadingIcon} alt='loading' />
    </div>
  );
};

export { Loading };
