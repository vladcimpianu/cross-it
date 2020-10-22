import Container from "@material-ui/core/Container";
import React from "react";

import { AppWrapper } from "./components/AppWrapper/AppWrapper";
import { useAppStyles } from "./theme/styles/useAppStyles";

export const App = () => {
  const classes = useAppStyles();

  return (
    <Container disableGutters className={classes.appContainer}>
      <AppWrapper />
    </Container>
  );
};
