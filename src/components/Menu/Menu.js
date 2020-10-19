import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  FormatListBulletedRounded as Bullets,
  NightsStayRounded as Weather,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      alignItems: "center",
    },
    menuItem: {
      margin: theme.spacing(0, 10),
    },
  })
);

export const Menu = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary" className={classes.appBar}>
      <Toolbar disableGutters>
        <IconButton edge="start" color="inherit" className={classes.menuItem}>
          <Bullets />
        </IconButton>
        <IconButton edge="end" color="inherit" className={classes.menuItem}>
          <Weather />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
