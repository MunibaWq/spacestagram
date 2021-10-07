import React from 'react';
import { Typography, makeStyles, Box, Link } from '@material-ui/core';
import heroImage from '../assets/hero.jpg';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${heroImage})`,
    backgroundSize: 'cover',
    color: '#f5f5f5',
    [theme.breakpoints.down('sm')]: {
      minHeight: '50vh'
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: '100vh'
    }
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '25vh'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '40vh'
    }
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box className={classes.content}>
        <Typography variant='h1'>
          SPACE<strong>STAGRAM</strong>
        </Typography>
        <Typography variant='h5'>
          Mars rover image gallery built using{' '}
          <Link href='https://api.nasa.gov' underline='none' color='inherit'>
            {`NASA's API`}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export { Hero };
