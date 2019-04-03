import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { userActions } from "../../actions/user.actions";
import { actionsConstant } from "../../Constants/user.Constant";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        repetPassword: "",
        gender: "male"
      },
      submitted: false
    };
    this.props.dispatch({ type: actionsConstant.LOGOUT });
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const user = this.state.user;
    const { dispatch } = this.props;
    if (user.name && user.email && user.password && user.gender) {
      dispatch(userActions.register(user));
    }
  };
  render() {
    const { registering, error } = this.props;
    const { user, submitted } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !user.name ? " has-error" : "")
            }
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={this.handleChange}
            />
            {submitted && !user.email && (
              <div className="help-block">Name is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.email ? " has-error" : "")
            }
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={this.handleChange}
            />
            {submitted && !user.email && (
              <div className="help-block">Email is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !user.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div
            className={
              "form-group" +
              (submitted && !user.repetPassword ? " has-error" : "")
            }
          >
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="repetPassword"
              value={user.repetPassword}
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Repeat Password is required</div>
            )}
          </div>

          <div
            className={
              "form-group" +
              (submitted && !user.repetPassword ? " has-error" : "")
            }
          >
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Signup</button>
            {registering && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="wait loging"
              />
            )}
            <Link to="/login">Login</Link>
            
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering, error } = state.registration;
  return {
    registering,
    error
  };
}

const connectedSignup = connect(mapStateToProps)(Signup);
export { connectedSignup as Signup };
