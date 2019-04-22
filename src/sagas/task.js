import {takeLatest, put, call} from "redux-saga/effects";
import {actions, types} from "../reducers/task";
import * as api from "../services/api";


function* getTasks() {
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


function* create(action) {
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

function* update(action) {
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

function* remove(action) {
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

function* search(action) {
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

export const taskSAgas = [
  takeLatest(types.USER_TASKS_REQUEST, getTasks),
  takeLatest(types.CREATE_TASK_REQUEST, create),
  takeLatest(types.UPDATE_TASK_REQUEST, update),
  takeLatest(types.DELETE_TASK_REQUEST, remove),
  takeLatest(types.SEARCH_TASKS_REQUEST, search),
];
