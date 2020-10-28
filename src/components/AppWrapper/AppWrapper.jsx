import { Typography, Container } from "@material-ui/core";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Menu } from "../Menu/Menu.jsx";
import { Weather } from "../Weather/Weather.jsx";
import { useAppWrapperStyles } from "./useAppWrapperStyles";

export const AppWrapper = () => {
  const classes = useAppWrapperStyles();

  return (
    <Container className={classes.appWrapper}>
      <Suspense fallback={<Typography variant="h4">Loading...</Typography>}>
        <Router>
          <Route path="/" exact component={Weather} />
        </Router>
        <Menu />
      </Suspense>
    </Container>
  );
};
