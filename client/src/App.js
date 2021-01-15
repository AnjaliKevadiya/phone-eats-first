import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import SignIn from "./pages/signIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/signin"]} component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
