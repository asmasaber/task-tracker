import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Search from "./search";
import CreateTask from "./create";
import TaskList from "./taskList";
import SearchResult from "./searchResult";
import { actions } from "../../redux/actions/task";

class TaskBoard extends React.Component {
  boardContent = () => {
    if (!this.props.searchMode) {
      return (
        <div>
          <TaskList {...this.props} />
          <CreateTask {...this.props} />
        </div>
      );
    } else {
      return <SearchResult {...this.props} />;
    }
  };
  render() {
    const error = this.props.error;
    return (
      <div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <Search {...this.props} />
        {this.boardContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchMode: state.task.searchMode,
  loadingfiltiredTasks: state.task.loadingfiltiredTasks,
  filtiredTasks: state.task.filtiredTasks,
  loadingTask: state.task.loadingTask,
  tasks: state.task.tasks,
  activeTask: state.task.activeTask,
  error: state.task.error,
  creatingTask: state.task.creatingTask,
  deletingTask: state.task.deletingTask,
  updatingTask: state.task.updatingTask
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
