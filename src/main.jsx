import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// Register the service worker for the Sanolines PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Sanolines PWA service worker registered:", registration.scope);
      })
      .catch((error) => {
        console.error("Sanolines service worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
