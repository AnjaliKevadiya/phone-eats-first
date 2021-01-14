import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/signin"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
            </div>
    </Router>

  );
}

export default App;
