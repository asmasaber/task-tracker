import React from "react";
import Form from "../form"
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Link from '../navigation/link'
import { checkEmail, checkRequied } from "../../services/validation"
class Login extends Form{

  componentDidMount() {
   this.initializeForm(); 

  }
  initializeForm = () => {
    const form = {
      email:{
         value: "", 
         isValid: false,
         validators:[
           {
             type: checkRequied
           },
           {
             type: checkEmail
           }
       ]},
       password:{
        value: "", 
        isValid: false,
        validators:[checkRequied]
    },
     };
     this.setState({form: form})
  }

  login = () => {
    const { dispatch } = this.props;
    dispatch(login(this.formValues));
  }

  render() {
    const { loggingIn, error } = this.props;
    const email = this.getfield("email")
    const password = this.getfield("password")
    const submitted = this.isFormSubmitted;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.handleSubmit(this.login)} noValidate>
          <div
            className={"form-group" + ((submitted && !email.isValid)? " has-error" : "")}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          {submitted && !email.isValid && (
              <div className="help-block">{email.error}</div>
            )}
          <div
            className={
              "form-group" + (submitted && !password.isValid ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            {submitted && !password.isValid && (
              <div className="help-block">{password.error}</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="wait loging"
              />
            )}
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, error } = state.authentication;
  return {
    loggingIn,
    error
  };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
