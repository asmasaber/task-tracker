import React from "react";
import Form from "../form";
import { connect } from "react-redux";
import Link from '../navigation/link'
import  * as validators  from "../../services/validation"


import { signup } from "../../actions/auth";

class Signup extends Form {

  componentDidMount() {
    this.initializeForm(); 
  }

  initializeForm = () => {
    const form = {
      name:{
        value: "", 
        isValid: false,
        validators:[
          {
            type: validators.checkRequied
          },
          {
            type: validators.checkText
          },
          {
            type: validators.checkMinLength(),
            restParm: [3]
          },
          {
            type: validators.checkMaxLength,
            restParm : [25]
          }
      ]},
      email:{
        value: "", 
        isValid: false,
        validators:[
          {
            type: validators.checkRequied
          },
          {
            type: validators.checkEmail
          }
      ]},
      password:{
        value: "", 
        isValid: false,
        validators:[validators.checkRequied, validators.checkPassword
      ]},
      repeatPassword:{
        value: "", 
        isValid: false,
        validators:[validators.checkRequied, validators.confirmPassword]
      },
      gender:{
        value: "", 
        isValid: false,
        validators:[]
      },
    };
    this.setState({form: form})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    let _form = {...this.state.form};
    console.log(_form)
    _form.repeatPassword.validators[1].restParm = [_form.password.value];
    if(prevState.form.repeatPassword && (_form.repeatPassword.validators[1].restParm  !== prevState.form.repeatPassword.validators[1].restParm ))
      this.setState({form: {..._form}})
  }
  signup = () => {
    const { dispatch } = this.props;
    dispatch(signup(this.formValues));
  }

  render() {
    const { registering, error } = this.props;
    const submitted = this.isFormSubmitted
    const name = this.getfield("name")
    const email = this.getfield("email")
    const password = this.getfield("password")
    const repeatPassword = this.getfield("repeatPassword")

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.handleSubmit(this.signup)} noValidate>
          <div
            className={
              "form-group" + (submitted && !name.isValid ? " has-error" : "")
            }
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
            />
            {submitted && !name.isValid && (
              <div className="help-block">{name.error}</div>
            )}
          </div>

          <div
            className={
              "form-group" + (submitted && ! email.isValid ? " has-error" : "")
            }
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
            {submitted && !email.isValid && (
              <div className="help-block">{email.error}</div>
            )}
          </div>
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
          <div
            className={
              "form-group" +
              (submitted && !repeatPassword.isValid ? " has-error" : "")
            }
          >
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="repeatPassword"
              onChange={this.handleChange}
            />
            {submitted && !repeatPassword.isValid && (
              <div className="help-block">{repeatPassword.error}</div>
            )}
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              name="gender"
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
