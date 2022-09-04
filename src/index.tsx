import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find root element");
}

const root = createRoot(rootElement);

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
