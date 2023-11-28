import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./services/productsApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
