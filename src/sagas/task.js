import {takeLatest, put, call} from "redux-saga/effects";
import {taskActions} from "../constants/actionTypes";
import * as api from "../services/api";


function* getTasks(action) {
  try {
    const responseBody = yield call(api.getTasks);
    console.log("gettasks >> ", responseBody)
  }
  catch (e)
  {
    yield put(
      {
        type: taskActions.USER_TASKS_FAILURE,
        error: e.message
      }
    );
  }
}


function* create(action) {
  try {
    console.log("create saga", action)

    const responseBody = yield call(api.createTask, action.payload.task);
    if(responseBody) {
      yield put(
        {
          type: taskActions.CREATE_TASKS_SUCCESS,
          payload: {
            createdTask: responseBody
          }
        });
    }
  }
  catch (e)
  {
    yield put(
      {
        type: taskActions.CREATE_TASKS_FAILURE,
        error: e.message
      }
    );
  }
}
export const taskSAgas = [
  takeLatest(taskActions.USER_TASKS_REQUEST, getTasks),
  takeLatest(taskActions.CREATE_TASK_REQUEST, create),
];
