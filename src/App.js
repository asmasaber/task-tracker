import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import {Login} from "./components/membership/login";
import Signup from "./components/membership/signup";
import Tasks from "./components/tasks/tasks";
import NavBar from "./components/layout/navbar";
import "./App.css";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/board" component={Tasks} />
      </Switch>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
