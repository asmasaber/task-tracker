import React from "react";
import { connect } from "react-redux";
import { update, remove } from "../../actions/task";

class Task extends React.Component {
  completeTask = task => {
    console.log("complate task", task);
    this.props.update({ ...task, done: true });
  };
  deleteTask = task => {
    console.log("delete task", task);
    this.props.remove(task);
  };
  render() {
    const task = this.props.task;
    const {updatingTask, deletingTask} = this.props;
    console.log(updatingTask)
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => this.completeTask(task)}
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={task.title}
        />
        <div className="input-group-append">
          <button
            className="btn  btn-light btn-link"
            type="button"
            id="button-addon2"
            onClick={() => this.deleteTask(task)}
          >
            Remove
          </button>
        </div>
        {(updatingTask || deletingTask)&& (
                <img
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  alt="wait loging"
                />
              )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { deletingTask, updatingTask, error } = state.task;
  return {
    deletingTask,
    updatingTask,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: task => dispatch(update(task)),
    remove: task => dispatch(remove(task)),
  };
}

const connectedTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
export { connectedTask as Task };
