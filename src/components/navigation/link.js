import React from "react"; 
import {history} from "../../helpers/history";

export default class Link extends React.Component{

    handleLinkClick = (e) => {
      e.preventDefault();
      history.pushState(this.props.to);
    }
    render () {
      const {className, children} = this.props;
      return(
        <a 
          href="/"
          className={className}
          onClick={this.handleLinkClick}
        >
          {children}
        </a>
      );
    }
}