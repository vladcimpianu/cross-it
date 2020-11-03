import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import {
  FormatListBulletedRounded as BulletsIcon,
  NightsStayRounded as WeatherIcon,
} from "@material-ui/icons";
import React from "react";
import { useMenuStyles } from "./useMenuStyles";
import { colors } from "../../theme";
import { useHistory } from "react-router-dom";

export const Menu = () => {
  const { push } = useHistory();
  const classes = useMenuStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters>
        <IconButton
          edge="start"
          style={{ color: colors.gray }}
          className={classes.menuItem}
          onClick={() => push("/reminders")}
        >
          <BulletsIcon fontSize="large" />
        </IconButton>
        <IconButton
          edge="end"
          style={{ color: colors.gray }}
          className={classes.menuItem}
          onClick={() => push("/weather")}
        >
          <WeatherIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
