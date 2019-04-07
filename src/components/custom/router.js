import React from "react";
import {routes, defualtRout, authRout} from "../../routes";
import {history} from "../../history"
export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname
        };
    }

    componentDidMount= () => {
        window.addEventListener("pushState", (e) => {
            this.setState(
                {
                  currentPath: window.location.pathname
                });
        });
    }

    get routerComponent() {
        const route = routes.find(route => {
            return route.path === this.state.currentPath;
        });
        if(route)
            return this.checkRouteAuth(route)
        else
            return this.checkRouteAuth(defualtRout)
    }

    checkRouteAuth (route) {

        if (route) {
            if(route.requiresAuth) {
                if( localStorage.getItem('user'))
                    return route.component;
                else
                {

                    history.pushState(authRout.path)
                    return authRout.component
                }
             }
             else {

                 return route.component
             }
        }
        return null;
    }
    render() {
        return (
            <div>
                {this.routerComponent}
            </div>
        );
    }
}