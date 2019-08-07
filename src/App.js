import React from "react";
import ReactDOM from "react-dom";
import App from "./index.js";
import Jokes from "./components/Jokes";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./components/Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  rootElement
);
