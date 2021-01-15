import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
