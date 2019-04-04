import React from 'react'
import {Router} from './components/custom/router'
// import {Router} from './Route/routes'

import { NavBar } from './components/layout/navbar'
// import { Login } from './components/auth/login'
// import { Signup } from './components/auth/signup'
// import TaskBoard from './components/taskBoard/board'

// import { PrivateRoute } from './components/custom/privateRoute'

// class Routes extends React.Component {
//     render() {
//         return (
//             <Router>
//                 {/* <PrivateRoute exact path="/" component={TaskBoard} /> */}
//                 <Route path="/login" component={Login} />
//                 <Route path="/signup" component={Signup} />
//                 {/* <PrivateRoute path="/board" component={TaskBoard} /> */}
//             </Router>
//         )
//     }
// }

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Router />
            </div>
        )
    }
}

export default App
