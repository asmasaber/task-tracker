import React from "react";
import { Switch, Route } from "react-router-dom";

import { NavBar } from "./components/layout/navbar";
import { Login } from "./components/auth/login";
import { Signup } from "./components/auth/signup";
import TaskBoard from "./components/taskBoard/board";

import { PrivateRoute } from './components/custom/privateRoute'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={TaskBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/board" component={TaskBoard} />
      </Switch>
    );
  }
}

class App extends React.Component {
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
