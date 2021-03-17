import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Page from "./Page";

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
