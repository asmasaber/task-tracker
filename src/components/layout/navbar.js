import React from "react";
// import { Link } from "react-router-dom";
import Link from '../custom/link'

import { connect } from "react-redux";
class NavBar extends React.Component {
  userHeaders = user => {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link">{user.name}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Logout
          </Link>
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
    const { loggedIn, user } = this.props;
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
function mapStateToProps(state) {
  const { loggedIn, user } = state.authentication;
  return {
    loggedIn,
    user
  };
}

const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
