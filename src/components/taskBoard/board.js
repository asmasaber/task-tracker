import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Search from "./search";
import CreateTask from "./create";
import TaskList from "./taskList";
import SearchResult from "./searchResult";
import { actions } from "../../reducers/task";

class TaskBoard extends React.Component {

  boardContent = () => {
    if(!this.props.searchMode) {
      return (
        <div>
          <TaskList {...this.props}/>
          <CreateTask {...this.props}/>
        </div>
      );
    } else {
      return <SearchResult {...this.props}/>;
    }
    
  }
  render() {
    return (
      <div>
        <Search {...this.props}/>
        {this.boardContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { searchMode,loadingfiltiredTasks, filtiredTasks ,  loadingTask,activeTask, tasks, creatingTask, deletingTask, updatingTask, error } = state.task;
  return {
    searchMode,
    loadingfiltiredTasks,
    filtiredTasks,
    loadingTask,
    tasks,
    activeTask,
    error,
    creatingTask,
    deletingTask,
    updatingTask
  };
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});


const connectedTaskBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
export { connectedTaskBoard as TaskBoard };