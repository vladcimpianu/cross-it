import Container from "@material-ui/core/Container";
import { SnackbarProvider } from "notistack";

import React from "react";

import { AppWrapper } from "./components/AppWrapper/AppWrapper.jsx";
import { useAppStyles } from "./theme/styles/useAppStyles";

export const App = () => {
  const classes = useAppStyles();

  return (
    <Container disableGutters className={classes.appContainer}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <AppWrapper />
      </SnackbarProvider>
    </Container>
  );
};
