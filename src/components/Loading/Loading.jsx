import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";

import { useStyles } from "./styles";

export const Loading = ({ delay = 0, minHeight }) => {
  const classes = useStyles({ minHeight });
  const [showLoading, setShowLoading] = useState(delay);

  setTimeout(() => {
    setShowLoading(true);
  }, delay);

  if (!showLoading) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="error">
        Loading... Please wait
      </Typography>
      )
      <LinearProgress className={classes.progressBar} color="secondary" />
    </div>
  );
};

export default Loading;
