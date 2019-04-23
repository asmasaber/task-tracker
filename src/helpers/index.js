export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

export const makeActionCreator = (type,  ...argNames) => {
  return (...args) => {
    const action = { type , payload: {} };
    argNames.forEach((arg, index) => {
      if(argNames[index] === "error") {
        action[argNames[index]] = args[index]; 
      } else {      
        action.payload[argNames[index]] = args[index];
      }
    });
    return action;
  };
};

