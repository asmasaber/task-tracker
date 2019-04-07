import React from "react";
import Form from "../forms"
import { connect } from "react-redux";
import { userActions } from "../../actions/user";
import Link from '../custom/link'
import { validators } from "../../services/validators"
class Login extends Form{
  constructor(props) {
    super(props);
    // this.state = {
    //   email: "",
    //   password: "",
    //   submitted: false
    // };
  }

  componentDidMount() {
   this.initializeForm(); 

  }
  initializeForm = () => {
    this.filed = ({name:"email", value: "", validators:[validators.Requied, validators.Email]});
    this.filed = ({name:"password", value: "", validators:[validators.Requied]});
    console.log(this.state.fileds)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.state.fileds.map(field => {
      if(field.name === name)
      field.value = value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { dispatch } = this.props;
    this.validateForm();
    if (this.state.isFormValid) {
      dispatch(userActions.login("email", "password"));      
    }
  };
  render() {
    const { loggingIn, error } = this.props;
    const { password, submitted } = this.state;
     const email = this.state.fileds? this.state.fileds.find(i => i.name == "email") : ""
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={"form-group" + (submitted ? " has-error" : "")}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              // value={email}
              onChange={this.handleChange}
            />
          </div>
         { console.log('submitted', this.getfield("email"))}
          {submitted && !this.getfield("email")[0].isValid && (
              <div className="help-block">{this.getfield("email")[0].error}</div>
            )}
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !this.getfield("password")[0].isValid && (
              <div className="help-block">{this.getfield("password")[0].error}</div>
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
