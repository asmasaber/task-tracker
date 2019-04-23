import {createStore, applyMiddleware} from "redux";
import rootReducer from "../redux/actions";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);