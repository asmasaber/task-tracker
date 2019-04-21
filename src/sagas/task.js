import {takeLatest, put, call} from "redux-saga/effects";
import {taskActions} from "../constants/actionTypes";
import * as api from "../services/api";


function* getTasks(action) {
  try {
    const responseBody = yield call(api.getTasks);
    if(responseBody) {
      yield put(
        {
          type: taskActions.USER_TASKS_SUCCESS,
          payload: {
            tasks: responseBody
          }
        });
    }
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

    const responseBody = yield call(api.createTask, action.payload.task);
    if(responseBody) {
      yield put(
        {
          type: taskActions.CREATE_TASKS_SUCCESS,
          payload: {
            createdTask: responseBody
          }
        });
        yield put({type: taskActions.USER_TASKS_REQUEST});
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

function* update(action) {
  try {

    const responseBody = yield call(api.updateTask, action.payload.task);
    if(responseBody) {
      yield put(
        {
          type: taskActions.UPDATE_TASKS_SUCCESS,
          payload: {
            updatedTask: responseBody
          }
        });
        yield put({type: taskActions.USER_TASKS_REQUEST});
    }
  }
  catch (e)
  {
    yield put(
      {
        type: taskActions.UPDATE_TASKS_FAILURE,
        error: e.message
      }
    );
  }
}

function* remove(action) {
  try {
    console.log("remove saga")
    console.log("response body >>")

    const responseBody = yield call(api.deleteTask, action.payload.task);
    console.log("response body >>", responseBody)
    if(responseBody) {
      console.log("check response body")
        yield put(
          {
            type: taskActions.DELETE_TASKS_SUCCESS,
            payload: {
              deleteTask: responseBody
            }
          });
          yield put({type: taskActions.USER_TASKS_REQUEST});
    }
  }
  catch (e)
  {
    yield put(
      {
        type: taskActions.DELETE_TASKS_FAILURE,
        error: e.message
      }
    );
  }
}
export const taskSAgas = [
  takeLatest(taskActions.USER_TASKS_REQUEST, getTasks),
  takeLatest(taskActions.CREATE_TASK_REQUEST, create),
  takeLatest(taskActions.UPDATE_TASK_REQUEST, update),
  takeLatest(taskActions.DELETE_TASK_REQUEST, remove),
];
