import React from "react";
import Form from "../form";
import {connect} from "react-redux";
import Link from "../navigation/link";
import  * as validators  from "../../services/validation";
import {signup} from "../../actions/auth";
import FormState from "../form/FormState";

class Signup extends Form {

  componentDidMount() {
    this.initializeForm({
      name:{
        validators:[
          validators.checkRequied, 
          validators.checkText, 
          validators.checkMinLength(3), 
          validators.checkMaxLength(25)
        ]
      },
      email:{
        validators:[
          validators.checkRequied,
          validators.checkEmail
        ]
      },
      password:{
        validators:[
          validators.checkRequied, 
          validators.checkPassword
        ]
      },
      repeatPassword:{
        validators:[
          validators.checkRequied, 
          validators.confirmPassword
        ]
      },
      gender:{
        validators:[]
      },
    }); 
  }

  componentDidUpdate(prevProps, prevState) {
    let form = new FormState({...this.state.form});
    form.repeatPassword.validators[1] = validators.confirmPassword(form.password.value);
    if(prevState.form.repeatPassword && (form.repeatPassword.validators[1]  !== prevState.form.repeatPassword.validators[1] ))
      this.setState({form: {...form}});
  }

  signup = (e) => {
    e.preventDefault(); 
    this.handleSubmit(this.props.signup);
  }
  
  render() {
    const {registering, error} = this.props;
    const {name, email, password, repeatPassword} = this.formFields;
    const submitted = this.isFormSubmitted;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.signup} noValidate>
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
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
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
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
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
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
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
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
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
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
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
  const {registering, error} = state.registration;
  return {
    registering,
    error
  };
}

function mapDispatchToProps(dispatch){
  return {
    signup: (values) => dispatch(signup(values))
  };
}


const connectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);
export {connectedSignup as Signup};
