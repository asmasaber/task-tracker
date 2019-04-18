import React from "react";
import {connect} from "react-redux";

import Form from "../form";
import {checkRequied, checkMinLength} from "../../services/validation";
import {create} from "../../actions/task";

class CreateTask extends Form{

  componentDidMount() {
    this.initializeForm({
      title:{
        validators:[
          checkRequied,
          checkMinLength(3)
        ]
      },
      details:{
        validators:[
          checkRequied,
          checkMinLength(3)
        ]
      },
    }); 
  }

  create = (e) => {
    e.preventDefault(); 
    this.handleSubmit(this.props.create);
  }

  render() {
    const {loggingIn, error} = this.props;
    const {title, details} = this.formFields;
    const submitted = this.isFormSubmitted;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Create New Task</h2>
        {submitted && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form name="form" onSubmit={this.create} noValidate>
          <div
            className={"form-group" + ((submitted && !title.isValid)? " has-error" : "")}
          >
            <label htmlFor="title">title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
            />
          </div>
          {submitted && !title.isValid && (
            <div className="help-block">{title.error}</div>
          )}
          <div
            className={
              "form-group" + (submitted && !details.isValid ? " has-error" : "")
            }
          >
            <label htmlFor="details">details</label>
            <input
              type="text"
              className="form-control"
              name="details"
              onChange={(e) => this.handleChange(e.target.name, e.target.value)}
            />
            {submitted && !details.isValid && (
              <div className="help-block">{details.error}</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Create</button>
            {loggingIn && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="wait loging"
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {creatingTask, error} = state.task;
  return {
    creatingTask,
    error
  };
}


function mapDispatchToProps(dispatch){
  return {
    create: (values) => dispatch(create(values))
  }
}

const connectedCreateTask = connect(mapStateToProps, mapDispatchToProps)(CreateTask);
export {connectedCreateTask as CreateTask};
