import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { store } from "./store";
import history  from "./utils/history";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
