import { createReducer, makeActionCreator } from "../../helpers";

export const types = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE"
};

const initialState = {
  registering: false,
  error: null
};

const handlers = {
  [types.REGISTER_REQUEST]: state => ({
    ...state,
    registering: true,
    error: null
  }),
  [types.REGISTER_SUCCESS]: state => ({
    ...state,
    registering: false 
  }),
  [types.REGISTER_FAILURE]:(state, action) => ({
    ...state,
    error: action.error,
    registering: false
  })
};

export default createReducer(initialState, handlers);


export const actions = {
  signupRequest: makeActionCreator(types.REGISTER_REQUEST, "formValues"),
  signupSuccess: makeActionCreator(types.REGISTER_SUCCESS),
  signupFailure: makeActionCreator(types.REGISTER_FAILURE, "error"),
};
