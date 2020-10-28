import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import {
  FormatListBulletedRounded as Bullets,
  NightsStayRounded as Weather,
} from "@material-ui/icons";
import React from "react";
import { useMenuStyles } from "./useMenuStyles";
import { colors } from "../../theme/index";

export const Menu = () => {
  const classes = useMenuStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters>
        <IconButton
          edge="start"
          style={{ color: colors.gray }}
          className={classes.menuItem}
        >
          <Bullets fontSize="large" />
        </IconButton>
        <IconButton
          edge="end"
          style={{ color: colors.red }}
          className={classes.menuItem}
        >
          <Weather fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
