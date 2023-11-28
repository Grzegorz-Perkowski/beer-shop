import { configureStore } from "@reduxjs/toolkit";
import { beersApi } from "../services/beersApi";

export const store = configureStore({
  reducer: {
    [beersApi.reducerPath]: beersApi.reducer,
  },
});
