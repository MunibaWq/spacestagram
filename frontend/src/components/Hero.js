import React from 'react';
import { Typography, makeStyles, Box, Link } from '@material-ui/core';
import heroImage from '../assets/hero.jpg';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${heroImage})`,
    backgroundSize: 'cover',
    height: '70vh',
    color: '#f5f5f5'
  },
  content: {
    paddingTop: '30vh'
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box className={classes.content}>
        <Typography>SPACESTAGRAM</Typography>
        <Typography>
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
