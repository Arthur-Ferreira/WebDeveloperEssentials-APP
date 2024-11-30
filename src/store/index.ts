import { configureStore } from "@reduxjs/toolkit";

import mobileReducer from "../feature/mobileSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
})

// Inferred type: { products: ProductState, title: TitleState, price: PriceState }
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>