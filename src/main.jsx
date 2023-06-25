import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
