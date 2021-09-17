import React from "react";
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
    paddingTop: "56.25%", // 16:9
  },
}));

const NasaCard = (props) => {
  const classes = useStyles();
  const { camera, earth_date, img_src, rover } = props.array;
  return (
    <Card className={classes.root}>
      <CardHeader title={camera.full_name} subheader={earth_date} />
      <CardMedia
        className={classes.media}
        image={img_src}
        title={camera.full_name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <h3>Rover Name: {rover.name}</h3>
          <p>Launch Date: {rover.launch_date}</p>
          <p>Landing Date: {rover.landing_date}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like picture">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="copy link">
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { NasaCard };
