import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
        </Switch>
            </div>
    </Router>

  );
}

export default App;
