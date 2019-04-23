import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import Link from "../navigation/link";

import { actions } from "../../redux/actions/auth";

class NavBar extends React.Component {
  logout = () => {
    this.props.logout();   
  }

  userHeaders = (user) => {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link">{user.email}</Link>
        </li>
        <li className="nav-item">
          <a href="/login"
            className="nav-link" 
            onClick={this.logout}
          >
                    Logout
          </a>
        </li>
      </ul>
    );
  };

  guestHeaders = () => {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Singup
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    const {loggedIn, user} = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {loggedIn ? this.userHeaders(user) : this.guestHeaders()}
        </div>
      </nav>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
