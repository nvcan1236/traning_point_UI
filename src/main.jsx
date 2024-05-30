import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./contexts/authContext.jsx";
import { CommonProvider } from "./contexts/commonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CommonProvider>
          <App />
        </CommonProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
