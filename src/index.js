import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Loader from "./components/loader";
// import App from './App.js'
import { Provider } from "react-redux";
import store from "./config/store";

const App = lazy(() => import("./App.js"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
