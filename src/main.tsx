import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./global";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Error"
  )
}