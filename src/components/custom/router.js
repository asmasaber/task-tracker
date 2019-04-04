import React from 'react'
import {routes} from '../../routes/index'
import Board from '../taskBoard/board'
export class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPath: window.location.pathname
        }
    }

    get routerComponent() {
        const defualtComponent = <Board />
        const route = routes.find(route => {
            return route.path === this.state.currentPath
            
        });
        if (route) {
            return route.component;
        }

        return defualtComponent;
    }

    render() {
        return (
          <div>
              {this.routerComponent}
          </div>
        )
      }
}