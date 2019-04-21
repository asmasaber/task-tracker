import React from "react";
import {CreateTask} from "./create";
import {TaskList} from "./taskList";

export default class TaskBoard extends React.Component {
  render() {
    return (
      <div>
        <TaskList />
        <CreateTask />
      </div>
    );
  }
}