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
import ShareIcon from "@material-ui/icons/Share";

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
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Rover Name: {rover.name}
          <br />
          Launch Date: {rover.launch_date}
          <br />
          Landing Date: {rover.landing_date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { NasaCard };
