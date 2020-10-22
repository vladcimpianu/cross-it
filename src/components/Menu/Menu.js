import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import {
  FormatListBulletedRounded as Bullets,
  NightsStayRounded as Weather,
} from "@material-ui/icons";
import React from "react";
import { useMenuStyles } from "./useMenuStyles";

export const Menu = () => {
  const classes = useMenuStyles();
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
