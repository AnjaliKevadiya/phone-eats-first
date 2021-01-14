import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp"
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <Navbar />
        <Form />
      </div> */}
      <div>
        <Switch>
        {/* <StoreProvider> */}
          <Route exact path="/signup" component={SignUp} />
        {/* </StoreProvider> */}
        </Switch>
            </div>

    </Router>

  );
}

export default App;
