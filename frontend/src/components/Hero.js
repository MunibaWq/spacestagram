import React from 'react';
import { Typography, makeStyles, Box, colors } from '@material-ui/core';
import heroImage from '../assets/hero.jpg';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: ` url(${heroImage})`,
    backgroundSize: 'cover',
    height: '50vh',
    color: '#f5f5f5'
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box>SPACESTAGRAM - Nasa Mars Rover Image Gallery</Box>
    </Box>
  );
};

export { Hero };
