import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
}));

const NasaCard = (props) => {
  const [like, setLike] = useState(false);
  const classes = useStyles();
  const { camera, earth_date, img_src, rover } = props.array;

  const toggleLike = () => {
    let liked = like;
    liked = !liked;
    setLike(liked);
  };
  let title = `Rover Name: ${rover.name}`;
  let captured = `Captured: ${earth_date}`;
  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={captured} />
      <CardMedia
        className={classes.media}
        image={img_src}
        title={camera.full_name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>Launch Date: {rover.launch_date}</p>
          <p>Landing Date: {rover.landing_date}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like picture" onClick={() => toggleLike()}>
          {like === true ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton aria-label="copy link">
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { NasaCard };
