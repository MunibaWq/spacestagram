import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  styled,
  Collapse
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    borderRadius: '0',
    width: '50vw'
  },
  media: {
    paddingTop: '100%'
  }
}));

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const NasaCard = props => {
  const [like, setLike] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const { camera, earth_date, img_src, rover } = props.array;

  let title = `Rover Name: ${rover.name}`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <CardHeader title={title} />
          <Typography variant='body2' color='textSecondary' component='div'>
            <p>Taken On: {earth_date}</p>
            <p>Launch Date: {rover.launch_date}</p>
            <p>Landing Date: {rover.landing_date}</p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { NasaCard };
