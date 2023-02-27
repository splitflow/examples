import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createDesignerTool } from "@splitflow/designer";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import splitflowApp from "./splitflow";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Radix from "./radix/Radix";

if (splitflowApp().devtool) {
  createDesignerTool();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/radix",
    element: <Radix />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
