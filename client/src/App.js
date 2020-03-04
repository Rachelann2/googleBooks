import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import indexPage from "./pages/index";
import savedPage from "./pages/saved";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={indexPage} />

        <Route exact path="/saved" component={savedPage} />
      </Switch>

    </Router>
  );
}
