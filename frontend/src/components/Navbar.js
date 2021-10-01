import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  makeStyles,
} from "@material-ui/core";
import heroImage from "../assets/hero.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    color: "black",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ flexGrow: 1, alignSelf: "flex-end" }}
      >
        MUI
      </Typography>
    </AppBar>
  );
};

export { Navbar };
