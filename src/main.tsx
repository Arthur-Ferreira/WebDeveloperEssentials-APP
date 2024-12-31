import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./global";
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Error"
  )
}