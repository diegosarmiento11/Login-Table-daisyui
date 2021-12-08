import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import { Login, Table } from "./views";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.table} component={Table} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
