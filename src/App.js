import Container from "@material-ui/core/Container";
import React from "react";

import { AppWrapper } from "./components/AppWrapper/AppWrapper";

export const App = () => {
  return (
    <Container disableGutters>
      <AppWrapper />
    </Container>
  );
};
