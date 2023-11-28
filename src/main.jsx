import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { beersApi } from "./services/beersApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={beersApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
