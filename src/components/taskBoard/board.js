import React from "react";
import {connect} from "react-redux";
import {getTasks} from "../../actions/task"
import {CreateTask} from "./create"

class TaskBoard extends React.Component {
  componentDidMount() {
    //get tasks
    this.props.getTasks();
  }
  render() {
    return <div>
      <CreateTask />
    </div>;
  }
}

function mapStateToProps(state) {
  const {loadingTask, tasks, error} = state.task;
  return {
    loadingTask,
    tasks,
    error
  };
}

function mapDispatchToProps(dispatch){
  return {
    getTasks: () => dispatch(getTasks())
  }
}

const connectedTaskBoard = connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
export {connectedTaskBoard as TaskBoard};
