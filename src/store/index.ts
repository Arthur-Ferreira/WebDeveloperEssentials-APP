import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
})

// Inferred type: { products: ProductState, title: TitleState, price: PriceState }
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>