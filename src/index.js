// DEPENDENCIES
  import React from "react";
  import ReactDOM from "react-dom";

// REDUX
  import { Provider } from "react-redux";
  import { createStore } from "redux";
  import { logger } from 'redux-logger'
  import { rootReducer } from './reducers'
  // middleware
    import { applyMiddleware } from 'redux';
    import thunk from 'redux-thunk'

  // COMPONENTS
  import App from "./App";

// CSS
  import "./index.css";

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
