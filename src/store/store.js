import { configureStore } from "@reduxjs/toolkit";
import { beersApi } from "../services/api/beersApi";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    [beersApi.reducerPath]: beersApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beersApi.middleware),
});
