import React from "react";
import { routes, defualtRout, authRout } from "../../services/routes";
import { history } from "../../helpers/history";
import { checkAuth } from "../../services/auth";
export class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname
        };
    }

    componentDidMount() {
        window.addEventListener("pushState", () => this.setState({ currentPath: window.location.pathname }));
    }

    get routerComponent() {
        const route = routes.find(route => {
            return route.path === this.state.currentPath;
        });
        return this.checkRouteAuth(route);
    }

    checkRouteAuth(route) {
        if (route) 
            if(route.requiresAuth && !checkAuth())
                return this.redirectTo(authRout);
            else
                return route.component;
        else
            return this.checkRouteAuth(defualtRout);
    }

    redirectTo(route) {
        history.pushState(route.path);
        return route.component;
    }

    render() {
        return (
            <div>
                { this.routerComponent }
            </div>
        );
    }
}