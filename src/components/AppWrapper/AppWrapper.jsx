import { Container } from "@material-ui/core";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Menu } from "../Menu/Menu.jsx";
import { Weather } from "../Weather/Weather";
import { Reminders } from "../Reminders/Reminders";
import { useAppWrapperStyles } from "./useAppWrapperStyles";
import Loading from "../Loading/Loading";

export const AppWrapper = () => {
  const classes = useAppWrapperStyles();
  return (
    <Container className={classes.appWrapper}>
      <Suspense fallback={<Loading delay={500} />}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Weather} />
            <Route path="/reminders" component={Reminders} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </Router>
      </Suspense>
    </Container>
  );
};
