import React from "react";
import ReactDOM from "react-dom";
import reducer from "./data/Reducer";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./app";
import "./index.css";

//thunk-redux is used to make async actions possible
//Using thunk makes it possible to move the entire model into redux, instead of wrapping a store.
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
