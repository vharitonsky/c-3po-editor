import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { TranslateAll } from "../TranslateAll";
import { Translate } from "../Translate";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/translate" component={Translate} />
        <Route path="/all/:page?" component={TranslateAll} />
        <Route component={() => <span>404</span>}/>
      </Switch>
    </Router>
  );
};

export default App;
