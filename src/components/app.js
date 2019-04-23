import React from "react";
import {Router} from "./navigation/router";
import NavBar from "./layout/navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default App;
