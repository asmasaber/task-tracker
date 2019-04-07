import React from "react";
import {Router} from "./components/custom/router";
import { NavBar } from "./components/layout/navbar";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Router />
            </div>
        );
    }
}

export default App;
