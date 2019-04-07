import React from "react"; 
import {history} from "../../history"

export default class Link extends React.Component{

    handleLinkClick = () => {
        console.log('link clicked >> ', this.props.to)
        history.pushState(this.props.to)
    }
    render () {
        return(
            <a 
              className={this.props.className}
              onClick={this.handleLinkClick}
            >
            {this.props.children}
            </a>
        );
    }
}