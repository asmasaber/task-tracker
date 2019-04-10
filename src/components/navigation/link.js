import React from "react"; 
import { history } from "../../helpers/history";

export default class Link extends React.Component{

    handleLinkClick = () => {
        history.pushState(this.props.to)
    }
    render () {
        const { className, children } = this.props
        return(
            <a 
              className={className}
              onClick={this.handleLinkClick}
            >
                {children}
            </a>
        );
    }
}