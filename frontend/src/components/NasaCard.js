import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    borderRadius: '0'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
}));

const NasaCard = props => {
  const [like, setLike] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const classes = useStyles();
  const { camera, earth_date, img_src, rover } = props.array;

  let title = `Rover Name ${rover.name}`;

  const toggleLike = () => {
    let liked = like;
    liked = !liked;
    setLike(liked);
  };

  const copyLink = url => {
    let link = url.img_src;
    navigator.clipboard.writeText(link);
    setCopySuccess('Copied to clipboard!');
    setTimeout(() => setCopySuccess(''), 3000);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={img_src}
        title={camera.full_name}
      />
      <CardContent>
        <CardHeader title={title} />
        <Typography variant='body2' color='textSecondary' component='div'>
          <p>Taken On: {earth_date}</p>
          <p>Launch Date: {rover.launch_date}</p>
          <p>Landing Date: {rover.landing_date}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='like picture' onClick={() => toggleLike()}>
          {like === true ? (
            <FavoriteIcon style={{ color: 'red' }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton
          aria-label='copy link'
          value={img_src}
          onClick={() => copyLink({ img_src })}
        >
          <LinkIcon />
        </IconButton>
        <Typography variant='body2' color='textSecondary' component='div'>
          <p>{copySuccess}</p>
        </Typography>
      </CardActions>
    </Card>
  );
};

export { NasaCard };
