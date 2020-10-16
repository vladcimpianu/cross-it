import { Typography, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TopMenu } from "../TopMenu/TopMenu";
import { Weather } from "../Weather/Weather";

export const AppWrapper = () => {
  return (
    <Container disableGutters>
      <Suspense fallback={<Typography variant="h4">Loading...</Typography>}>
        <Paper elevation={1}>
          <TopMenu />
          <Router>
            <Route path="/" exact component={Weather} />
          </Router>
        </Paper>
      </Suspense>
    </Container>
  );
};
