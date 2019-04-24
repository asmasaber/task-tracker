import {put, call} from "redux-saga/effects";
import {actions} from "../actions/task";
import * as api from "../../services/api";


export function* getTasks() {
  try {
    const responseBody = yield call(api.getTasks);
    if(responseBody) {
      yield put(actions.userTasksSuccess(responseBody));
    }
  }
  catch (e)
  {
    yield put(actions.userTasksFailure(e.message));
  }
}


export function* create(action) {
  try {

    const responseBody = yield call(api.createTask, action.payload.task);
    if(responseBody) {
      yield put(actions.createTaskSuccess(responseBody));
      yield put(actions.userTasksRequest());
    }
  }
  catch (e)
  {
    yield put(actions.createTaskFailure(e.message));
  }
}

export function* update(action) {
  try {

    const responseBody = yield call(api.updateTask, action.payload.task);
    if(responseBody) {
      yield put(actions.updateTaskSuccess(responseBody));
      yield put(actions.userTasksRequest());
    }
  }
  catch (e)
  {
    yield put(actions.updateTaskFailure(e.message));
  }
}
 
export function* remove(action) {
  try {
    const responseBody = yield call(api.deleteTask, action.payload.activeTask);
    if(responseBody) {
      yield put(actions.removeTaskSuccess());
      yield put(actions.userTasksRequest());
      yield put(actions.searchTaskRequest());
    }
  }
  catch (e)
  {
    yield put(actions.removeTaskFailure(e.message));
  }
}

export function* search(action) {
  try {
    const responseBody = yield call(api.search, action.payload.searchKey, action.payload.searchInComplated);
    if(responseBody) {
      yield put(actions.searchTaskSuccess(responseBody));
    }
  }
  catch (e)
  {
    yield put(actions.searchTaskFailure(e.message));
  }
}
