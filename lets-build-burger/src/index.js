import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
//router
import { BrowserRouter } from "react-router-dom";

import authReducer from "./store/reducers/authReducer";
import burgerReducer from "./store/reducers/burgerReducer";
import orderReducer from "./store/reducers/orderReducer";

import "./index.css";
import App from "./App";

const rootReducer = combineReducers({
  burgerState: burgerReducer,
  ordersState: orderReducer,
  authState: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

const application = (
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(application, document.getElementById("root"));
